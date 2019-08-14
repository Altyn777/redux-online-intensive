// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { createPost, fillPosts } from './workers';

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost); // на каждый запуск экшона CREATE_POST_ASYNC вызывается воркер сага createPost
}
export function* watchFillPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

export function* watchPosts () {
    yield all([call(watchFillPosts, watchCreatePost)]); // порядок имеет значение
}
