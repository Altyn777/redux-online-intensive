export function customThunk (store) { // передадим в ApplyMiddleware; доступ к сторе - из него можно вызывать dispatch + getState
    return function (next) { // next - функция - ее можно вызвать с объектом action, чтобы передать по цепочке Middleware-y или reducer-у(если мидлваров больше не осталось)
        return function (action) { // откр доступ к action
            // console.log('-> custom thunk-middleware', action);
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            }

            return next (action); // обязательное условие, иначе action будет проглочен Middleware
        }
    }
}
