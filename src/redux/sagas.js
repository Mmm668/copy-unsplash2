import {all} from "@redux-saga/core/effects";
import appSaga from './app/saga';
import photosSaga from './photos/saga';

export default function*(){
    yield all([
        appSaga(),
        photosSaga(),
    ])
}
