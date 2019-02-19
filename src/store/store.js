import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/index'
import logger from 'redux-logger'


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    let middlewares = [
        applyMiddleware(sagaMiddleware, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ];

    const store = createStore(
        rootReducer,
        compose(...middlewares)
    );

    sagaMiddleware.run(rootSaga);

    store.close = () => store.dispatch(END);

    return store

};

export default configureStore();

