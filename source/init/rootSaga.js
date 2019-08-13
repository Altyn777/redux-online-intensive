// f-генератор, собирает все вотчеры саги
// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchPosts } from "../bus/posts/saga/watchers";

export function* rootSaga() {
    yield all([call(watchPosts)]);
}
