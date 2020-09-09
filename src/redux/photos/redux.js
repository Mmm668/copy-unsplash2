import {photosCreators} from "../actionCreators";

const initialState = {
    fetchLoader : true,
    selectedPhoto: undefined,

    photos: [],
    photosHasMore: true,
    photosNextPage: 1, // start from 1 (related to saga put)
    photosPerPage: 10,

    keyword: '',
    selectedSearchTab: 'photos',
    searchResult: undefined,

    selectedCollectionId: undefined,
    collection: undefined,
    collectionPhotos: [],
    collectionPhotosHasMore: true,
    collectionPhotosNextPage: 1, // start from 1 (related to saga put)
    collectionPhotosPerPage: 10,
};

export const Action = {
    Types: {
        UPDATE_STATE: '@PHOTOS/UPDATE_STATE',
        CLEAR_STORE: '@PHOTOS/CLEAR_STORE', // set to initial state

        FETCH_PHOTOS: '@PHOTOS/FETCH_PHOTOS',
        SELECT_PHOTO: '@PHOTOS/SELECT_PHOTO',

        SEARCH_KEYWORD: '@PHOTOS/SEARCH_KEYWORD',

        FETCH_COLLECTION: '@PHOTOS/FETCH_COLLECTION',
        FETCH_COLLECTION_PHOTOS: '@PHOTOS/FETCH_COLLECTION_PHOTOS',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE
        }),
        fetchPhotos: () => ({
            type: Action.Types.FETCH_PHOTOS,
        }),
        selectPhoto: (list, item, pivot) => ({
            type: Action.Types.SELECT_PHOTO,
            list,
            item,
            pivot
        }),
        searchKeyword: (keyword) => ({
            type: Action.Types.SEARCH_KEYWORD,
            keyword
        }),
        fetchCollection: (payload) => ({
            type: Action.Types.FETCH_COLLECTION,
            payload
        }),
        fetchCollectionPhotos: (id) => ({
            type: Action.Types.FETCH_COLLECTION_PHOTOS,
            id,
        })
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE :
            return {
                ...state,
                ...action.payload
            };
        // case Action.Types.SELECT_PHOTO:
        //     // state.photos[index + pivot(-1, +1, +0)] // photo.length < x >= 0
        //     const { list, item, pivot } = action;
        //
        //     let startIndex = list.findIndex(photo => photo.id === item.id)
        //     let isInnerItem = startIndex > 0 && startIndex < list.length -1;
        //     let indexPosition = isInnerItem? '' :  startIndex - 1 === -1 ? 'first' : 'last';
        //     let newItem = isInnerItem ? list[startIndex + 1*pivot] : list[startIndex]
        //
        //     return {
        //         ...state,
        //         selectedPhoto: {
        //             indexPosition: indexPosition,
        //             ...newItem
        //         }
        //     }
        case Action.Types.CLEAR_STORE:
            return initialState;
        default:
            return state;
    }
}

