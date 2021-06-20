import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { IRootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import rootSaga from './sagas';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

function bindMiddleware(middleware: any) {
    // Just use redux devtools in dev mode
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

function makeStore<T>(initialState?: T) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

console.clear();

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const wrapper = createWrapper(makeStore, { debug: false });
