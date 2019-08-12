// Core
import { applyMiddleware, compose } from "redux";

// Middleware
import { createLogger } from "redux-logger/src";
import { customThunk } from "./custom";// import thunk from "redux-thunk"; // можно вкл асинхр режим работы
import createSagaMiddleware from 'redux-saga';

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

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose; // чтоб никто не мог видеть внутреннюю информацию

const middleware = [sagaMiddleware, customThunk];

if (__DEV__) { // глоб переменная, кот. генерируется настройкой вебпака, содержит true - разработка/false
    middleware.push(logger); // условие, редкас логгер добавляется в цепочку мидлваре ток в режиме разработки
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };
