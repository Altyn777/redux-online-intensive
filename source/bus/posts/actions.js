// Types
import { FETCH_POSTS_ASYNC, FILL_POSTS } from "./types";

// Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch, getState) => { // с пом thunk мж запускать функции вместо объектов
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    console.log('-> getState()', getState());

    const response = await api.posts.fetch(); // await обраб ответ от сервера, привязать сырой ответ от сервера
    const result = await response.json(); // преобр в настоящие данные с пом json

    // console.log('-> response', response); // 200 - код успешного овтета
    // console.log('-> result', result); // message + data (массив с постами)

    dispatch(fillPosts(result.data));
};
