import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer/_rootReducer';
import rootSaga from './saga/_rootSaga';
import getConfig from 'next/config';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const {
    publicRuntimeConfig: { ENV_HOST_NAME, ENV_PORT }, // Available both client and server side
    serverRuntimeConfig: { ENV_HOST }, // Only available server side
} = getConfig();

//1: create the middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// 2: Add an extra parameter for applying middleware:
const store: any = configureStore({
    reducer: rootReducer,
    middleware,
});

// 3: Run your sagas on server
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
