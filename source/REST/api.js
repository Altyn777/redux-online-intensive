// Instruments // адресная книга, все запросы к серверу
import { MAIN_URL, groupId } from "./config";

export const api = { // объект со свойствами
    posts: { // обращение для работы с постами
        fetch () { // метод для получения постов, возвращает промис
            return fetch(`${MAIN_URL}/feed`, {
                method: 'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });
        },
    },
};
