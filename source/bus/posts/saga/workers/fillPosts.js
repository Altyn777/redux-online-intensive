import { api } from "../../../../REST";

export function* fillPosts (action) {

    // const response = await api.posts.fetch(); // await обраб ответ от сервера, привязать сырой ответ от сервера
    // const result = await response.json(); // преобр в настоящие данные с пом json
    //
    // dispatch(postsActions.fillPosts(result.data));
    yield console.log('-> fillPosts saga', action);
}
