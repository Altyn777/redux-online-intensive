export const types = {
    // Sync
    FILL_POSTS: 'FILL_POSTS', // возьмет ответ сервера и загрузит их состояние redux
    CREATE_POST: 'CREATE_POST', // показать

    // Async
    FETCH_POSTS_ASYNC: 'FETCH_POSTS_ASYNC', // вызовет асинхронный запрос к серверу на получение данных
    CREATE_POST_ASYNC: 'CREATE_POST_ASYNC', // добавить пост в данные

}
