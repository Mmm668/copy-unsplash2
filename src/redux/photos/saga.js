import {Action as API, Action} from "./redux";
import {delay, put, call, takeLatest, spawn, all} from "@redux-saga/core/effects";


export default function* () {

    yield all([
        takeLatest(Action.Types.AUTH_TOUCH, function* () {
            // const result = yield call(API.authTouch);
            // if(!result?.data?.googleId) {
            //     console.log('@@ 로그인 실패');
            //     return navigate('/login')
            // }
            // const user = result.data;
            // setAccessToken(JSON.stringify(user));
            // yield put(Action.Creators.updateState({user}))
        }),
    ])
}