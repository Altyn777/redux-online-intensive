// Types
import { types } from "./types";

// Instruments
import { api } from '../../REST';

export const postsActions = {
    fillPosts: (posts) => { // action
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => { // action
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },
    fetchPostsAsync: () => async (dispatch) => { // с пом thunk мж запускать функции вместо объектов, async action
        dispatch({
            type: types.FETCH_POSTS_ASYNC, // триггер
        });

        // console.log('-> getState()', getState());

        const response = await api.posts.fetch(); // await обраб ответ от сервера, привязать сырой ответ от сервера
        const result = await response.json(); // преобр в настоящие данные с пом json

        // console.log('-> response', response); // 200 - код успешного овтета
        // console.log('-> result', result); // message + data (массив с постами)

        dispatch(postsActions.fillPosts(result.data));
    },
    createPostAsync: (comment) => {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
}
