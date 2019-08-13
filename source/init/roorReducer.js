// Core
import { combineReducers } from "redux"; // для создания редюсера, собирает все редюсеры в один объект

// Reducers
import { postsReducer as posts } from "../bus/posts/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";

export const rootReducer = combineReducers({
    posts,
    ui,
});
