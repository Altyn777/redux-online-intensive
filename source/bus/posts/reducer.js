// Core
import { fromJS, List } from "immutable"; // fromJS - метод для конвертации JS в коллекцию immutableJS; List - коллекция-список

// Instruments
import { SHOW_NEW_POST, FILL_POSTS } from "./types";

const initialState = List(); // [] // изначальное состояние для постов
//let initialStateNew = initialState.push(addNewPost);
/*
const list1 = List([1, 2, 3]);
console.log(list1);
const list2 = list1.push(4);
console.log(list2);
 */

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS: // посты добавим в свойство payload
            return fromJS(action.payload); // конвертируем payload -> immutable List
        case SHOW_NEW_POST:
            return state.unshift(fromJS(action.payload));

        default:
            return state; // добавляем результат в состояние
    }
};
