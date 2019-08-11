// Core
import { createStore } from "redux";

// Reducer
import { rootReducer } from "./roorReducer";

// Enhancer
import { enhancedStore } from "./middleware/core";

export const store = createStore(rootReducer, enhancedStore);

/*
store.subscribe(() => {
    const state = store.getState();
    //console.log('-> state', state);
    localStorage.setItem('gallery', JSON.stringify(state));
});
 */
