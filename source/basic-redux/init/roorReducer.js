// Core
import { combineReducers } from "redux"; // для создания редюсера, собирает все редюсеры в один объект

// Reducers
import { galleryReducer } from "../bus/gallery/reducer";

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
