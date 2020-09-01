
const initialState = {
    selected: undefined,// mock.cardPhotoList[1]
    keyword: '',
    searchResult: undefined,
};

export const Action = {
    Types: {
        UPDATE_STATE: '@PHOTOS/UPDATE_STATE',
        SEARCH_KEYWORD: '@PHOTOS/SEARCH_KEYWORD',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        searchKeyword : (payload) => ({
            type: Action.Types.SEARCH_KEYWORD,
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

