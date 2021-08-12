// import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { IRootState, rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import rootSaga from './sagas';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, getDefaultMiddleware, EnhancedStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
import { IRootState, rootReducer } from './reducer';

// function bindMiddleware(middleware: any) {
//   // Just use redux devtools in dev mode
//   if (process.env.NODE_ENV !== 'production') {
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// }

const sagaMiddleware = createSagaMiddleware();

let storeWrapper;
// return createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));

function makeStore<T>(initialState?: T) {
  const isServer = typeof window === 'undefined';

  // common make config store SERVER & CLIENT
  const makeConfigStore = reducer => {
    // return createStore(reducer, initialState, bindMiddleware([sagaMiddleware]));
    return configureStore({
      reducer,
      middleware: [
        ...getDefaultMiddleware({
          thunk: false,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredActionPaths: ['payload.callback'],
          },
        }),
        sagaMiddleware,
      ],
    });
  };

  if (isServer) {
    storeWrapper = makeConfigStore(rootReducer);
  } else {
    // we need it only on client side
    // const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    // persist config
    const persistConfig = {
      key: 'code_memory_root',
      whitelist: ['loginReducer'], // make sure it does not clash with server keys
      storage,
    };

    // create persist reducer
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    storeWrapper = makeConfigStore(persistedReducer);
    storeWrapper.__persistor = persistStore(storeWrapper); // Nasty hack
  }
  //   storeWrapper = makeConfigStore(rootReducer);
  storeWrapper.sagaTask = sagaMiddleware.run(rootSaga);
  return storeWrapper;
}

console.clear();

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore['getState']>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const wrapper = createWrapper(makeStore, { debug: false });

export { storeWrapper };

export const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

export const setClientState = clientState => ({
  type: SET_CLIENT_STATE,
  payload: clientState,
});
