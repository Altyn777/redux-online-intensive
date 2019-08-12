// Instruments // адресная книга, все запросы к серверу
import { MAIN_URL, groupId } from "./config";

export const api = { // объект со свойствами
    posts: { // обращение для работы с постами
        fetch () { // метод для получения постов, возвращает промис
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });
        },
        create (message) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    'x-no-auth':     groupId,
                    'Content-Type':  'application/json',
                    'Authorization': 'WtLfx3n2gCZL',
                },
                body: JSON.stringify(message),
            });
        },
    },
};
