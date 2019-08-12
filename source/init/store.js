// Core
import { createStore } from "redux";

// Roots
import { rootReducer } from "./roorReducer";
import { rootSaga } from "./rootSaga";

// Enhancer
import { enhancedStore, sagaMiddleware } from "./middleware/core";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
