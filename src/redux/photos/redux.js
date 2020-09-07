const initialState = {
    photos: undefined,
    selectedPhoto: undefined,

    keyword: '',
    selectedSearchTab: 'photos',
    searchResult: undefined,

    selectedCollectionId: undefined,
    collection: undefined,
    collectionPhotos: undefined,
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
        fetchPhotos: (payload) => ({
            type: Action.Types.FETCH_PHOTOS,
            payload
        }),
        selectPhoto: (item, pivot) => ({
            type: Action.Types.SELECT_PHOTO,
            item,
            pivot
        }),
        searchKeyword: (payload) => ({
            type: Action.Types.SEARCH_KEYWORD,
            payload
        }),
        fetchCollection: (payload) => ({
            type: Action.Types.FETCH_COLLECTION,
            payload
        }),
        fetchCollectionPhotos: (id, page, per_page = 10) => {
            console.log('@@ redux in [id, page, per_page]', id, page, per_page)
            return {
                type: Action.Types.FETCH_COLLECTION_PHOTOS,
                id,
                page,
                per_page
            }
        }
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE :
            return {
                ...state,
                ...action.payload
            };
        case Action.Types.SELECT_PHOTO:
            // state.photos[index + pivot(-1, +1, +0)] // photo.length < x >= 0
            let currentIndex = state.photos.findIndex(photo => photo.id === action.item.id)
            console.log('@@ 셀겔포 도ㅡㅌㄹ어롬', currentIndex);
            if (currentIndex - 1 >= 0 && currentIndex + 1 < state.photos.length) {
                return {
                    ...state,
                    selectedPhoto: {
                        indexPosition: '',
                        currentIndex: currentIndex,
                        ...state.photos[currentIndex + action.pivot]
                    }
                }
            } else {
                return {
                    ...state,
                    selectedPhoto: {
                        indexPosition:  currentIndex -1 < 0 ? 'first' : 'last',
                        currentIndex: currentIndex,
                        ...state.photos[currentIndex]
                    }
                }
            }
        case Action.Types.CLEAR_STORE:
            return initialState;
        default:
            return state;
    }
}

