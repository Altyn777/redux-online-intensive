// Core
import { applyMiddleware, compose } from "redux";

// Middleware
import { createLogger } from "redux-logger/src";
// import thunk from "redux-thunk"; // мидлваре, можно вклю асинхр режим работы
import { customThunk } from "./custom";

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
    },
});

// const preloadedState = JSON.parse(localStorage.getItem('gallery'));
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose; // чтоб никто не мог видеть внутреннюю информацию

const middleware = [customThunk];

if (__DEV__) { // глоб переменная, кот. генерируется настройкой вебпака, содержит true - разработка/false
    middleware.push(logger); // условие, редкас логгер добавляется в цепочку мидлваре ток в режиме разработки
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore };
