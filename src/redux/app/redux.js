const initialState = {
    user: null,
    toastMessage: '',
    headerType: 'category',
};

export const Action = {
    Types: {
        UPDATE_STATE: '@APP/UPDATE_STATE',
        AUTH_TOUCH: "AUTH_TOUCH",
        LOGOUT: "LOGOUT",
    },
    Creators:{
        updateState: (payload) => ({
            type : Action.Types.UPDATE_STATE,
                payload
        }),
        authTouch: () => ({
            type: Action.Types.AUTH_TOUCH
        }),
        logout: () => ({
            type: Action.Types.LOGOUT
        })
    }
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
        case Action.Types.UPDATE_STATE :
            return {
                ...state,
                ...action.payload
            };
    }
}

