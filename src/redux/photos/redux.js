
const initialState = {
    selectedPhoto: undefined,// mock.cardPhotoList[1]

    keyword: '',
    searchResult: undefined,

    selectedCollectionId: undefined,
    collection: undefined,
    collectionPhotos: undefined,
};

export const Action = {
    Types: {
        UPDATE_STATE: '@PHOTOS/UPDATE_STATE',
        SEARCH_KEYWORD: '@PHOTOS/SEARCH_KEYWORD',

        FETCH_COLLECTION: '@PHOTOS/FETCH_COLLECTION',
        FETCH_COLLECTION_PHOTOS: '@PHOTOS/FETCH_COLLECTION_PHOTOS',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        searchKeyword : (payload) => ({
            type: Action.Types.SEARCH_KEYWORD,
            payload
        }),
        fetchCollection: (payload) => ({
            type: Action.Types.FETCH_COLLECTION,
            payload
        }),
        fetchCollectionPhotos: (payload) => ({
            type: Action.Types.FETCH_COLLECTION_PHOTOS,
            payload
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
        default:
            return state;
    }
}

