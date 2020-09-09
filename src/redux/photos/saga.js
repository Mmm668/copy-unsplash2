import {Action} from "./redux";
import {put, call, takeLatest, all, select} from "@redux-saga/core/effects";
import API from "../../api";
import {photosCreators} from "../actionCreators";


export default function* () {
    yield all([
        /**
         * photos
         */
        takeLatest(Action.Types.FETCH_PHOTOS, function* () {
            const {photos, photosHasMore, photosNextPage, photosPerPage} = yield select(state => state.photos);

            if (photosHasMore) {
                yield put(photosCreators.updateState({fetchLoader: true}))
                const result = yield call(API.fetchPhotos, photosNextPage, photosPerPage); // error, request error 처리
                yield put(photosCreators.updateState({fetchLoader: false, photos: photos.concat(result.data)}))

                let headerLinks = result.headers.link.split(', ');
                let last = headerLinks.filter(item => item.includes('last'))[0].split('; ')[0]; // <https://api.unsplash.com/photos?page=19375&per_page=10>
                const endPage = parseInt(last.slice(last.indexOf('page=') + 5, last.indexOf('&')));

                if (photosNextPage + 1 !== endPage) {
                    yield put(photosCreators.updateState({photosNextPage: photosNextPage + 1}))
                } else {
                    photosCreators.updateState({photosHasMore: false})
                }
            }
        }),


        /**
         * keyword
         */
        takeLatest(Action.Types.SEARCH_KEYWORD, function* ({keyword}) {
            const result = yield call(API.searchKeyword, keyword);
            // console.log('@@ result', result); // error, request error 처리
            yield put(photosCreators.updateState({searchResult: result.data}))
        }),


        /**
         * collection
         */
        takeLatest(Action.Types.FETCH_COLLECTION, function* (action) {
            const result = yield call(API.fetchCollection, action.payload);
            // console.log('@@ result', result); // error, request error 처리
            yield put(photosCreators.updateState({collection: result.data}))
        }),
        takeLatest(Action.Types.FETCH_COLLECTION_PHOTOS, function* ({id}) {
            const {collectionPhotos, collectionPhotosHasMore, collectionPhotosNextPage, collectionPhotosPerPage} = yield select(state => state.photos);

            if (collectionPhotosHasMore) {
                yield put(photosCreators.updateState({fetchLoader: true}))
                const result = yield call(API.fetchCollectionPhotos, id, collectionPhotosNextPage, collectionPhotosPerPage); // error, request error 처리
                yield put(photosCreators.updateState({
                    fetchLoader: false,
                    collectionPhotos: collectionPhotos.concat(result.data)
                }));

                let headerLinks = result.headers.link.split(', ');
                let last = headerLinks.filter(item => item.includes('last'))[0].split('; ')[0]; // <https://api.unsplash.com/photos?page=19375&per_page=10>
                const endPage = parseInt(last.slice(last.indexOf('page=') + 5, last.indexOf('&')));

                if (collectionPhotosNextPage + 1 !== endPage) {
                    yield put(photosCreators.updateState({collectionPhotosNextPage: collectionPhotosNextPage + 1}))
                } else {
                    photosCreators.updateState({collectionPhotosHasMore: false})
                }
            }
        }),
    ])
}