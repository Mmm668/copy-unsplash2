const initialState = {
    selected: undefined
};

export const Action = {
    Types: {
        UPDATE_STATE: '@PHOTOS/UPDATE_STATE',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
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

