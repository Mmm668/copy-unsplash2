const initialState = {
    photos: undefined,
    selectedPhoto: undefined,// mock.cardPhotoList[1]

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

        FETCH_PHOTOS: '@PHOTOS/FETCH_PHOTOS',

        SEARCH_KEYWORD: '@PHOTOS/SEARCH_KEYWORD',

        FETCH_COLLECTION: '@PHOTOS/FETCH_COLLECTION',
        FETCH_COLLECTION_PHOTOS: '@PHOTOS/FETCH_COLLECTION_PHOTOS',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        fetchPhotos: (payload) => ({
            type: Action.Types.FETCH_PHOTOS,
            payload
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
        default:
            return state;
    }
}

