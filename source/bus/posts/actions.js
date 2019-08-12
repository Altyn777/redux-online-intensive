// Types
import { FETCH_POSTS_ASYNC, FILL_POSTS, ADD_NEW_POST, SHOW_NEW_POST } from "./types";

// Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => { // action
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const showNewPost = (data) => { // action
    return {
        type:    SHOW_NEW_POST,
        payload: data,
    };
};

export const fetchPostsAsync = () => async (dispatch, getState) => { // с пом thunk мж запускать функции вместо объектов, async action
    dispatch({
        type: FETCH_POSTS_ASYNC, // триггер
    });

    console.log('-> getState()', getState());

    const response = await api.posts.fetch(); // await обраб ответ от сервера, привязать сырой ответ от сервера
    const result = await response.json(); // преобр в настоящие данные с пом json

    // console.log('-> response', response); // 200 - код успешного овтета
    // console.log('-> result', result); // message + data (массив с постами)

    dispatch(fillPosts(result.data));
};

export const createPostAsync = (comment) => async (dispatch) => { // async action
    dispatch({
        type: ADD_NEW_POST,
    });
    const response = await api.posts.create(comment);
    const result = await response.json();

    dispatch(showNewPost(result.data));
};
