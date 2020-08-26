import {bindActionCreators} from "redux";
import store from './store'
import {Action as AppAction} from './app/redux';
import {Action as PhotosAction} from './photos/redux';

const {dispatch} = store;

export const appCreators = bindActionCreators(AppAction.Creators, dispatch);
export const photosCreators = bindActionCreators(PhotosAction.Creators, dispatch);
