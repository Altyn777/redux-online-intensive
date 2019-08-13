// Core
import { fromJS, List } from "immutable"; // fromJS - метод для конвертации JS в коллекцию immutableJS; List - коллекция-список

// Instruments
import { types } from "./types";

const initialState = List(); // [] // изначальное состояние для постов

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS: // посты добавим в свойство payload
            return fromJS(action.payload); // конвертируем payload -> immutable List

        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));

        default:
            return state; // добавляем результат в состояние
    }
};
