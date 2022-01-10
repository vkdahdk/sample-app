import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import rootSaga from './saga/rootSaga';
import logger from 'redux-logger';


const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, logger];

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ thunk: false }).concat(...middleware),
        devTools: process.env.NODE_ENV !== 'production',
    });

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store;
};

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(...middleware),
//     devTools: process.env.NODE_ENV !== 'production',
// });

// sagaMiddleware.run(rootSaga);

export const wrapper = createWrapper(store, {
    debug: process.env.NODE_ENV !== 'production',
});
