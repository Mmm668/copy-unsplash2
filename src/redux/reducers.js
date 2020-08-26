import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as photosReducer} from './photos/redux';

const reducers = combineReducers({
    app: appReducer,
    photos: photosReducer,
})

export default reducers;