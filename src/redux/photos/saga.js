import {Action} from "./redux";
import {put, call, takeLatest, all} from "@redux-saga/core/effects";
import API from "../../api";
import {photosCreators} from "../actionCreators";


export default function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_KEYWORD, function* (action) {
            const result = yield call(API.searchKeyword, action.payload);
            console.log('@@ result', result); // error, request error 처리
            yield put(photosCreators.updateState({searchResult: result.data}))
        }),
    ])
}