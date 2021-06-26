import { userReducer } from './userReducer';
import { loginReducer } from './loginReducer';
import { isLoadingReducer } from './loadingReducer';
import { seoHomeReducer } from './seoHomeReducer';
import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { SET_CLIENT_STATE } from '@Redux/store';

const reducers = combineReducers({ isLoadingReducer, seoHomeReducer, loginReducer, userReducer });

const rootReducer = (state: IRootState, action: AnyAction): IRootState => {
    /**
     * @description We are using Next-Redux-Wrapper and Saga
     * so, server will execute the dispatch in server, after dispatch new state will be passed to
     * client by dispatch the HYDRATE
     */
    if (action.type === HYDRATE || action.type === SET_CLIENT_STATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return reducers(state, action);
    }
};
export default rootReducer;

/**
 * @description Use IRootState to set interface for callback's state
 *  in useSelector
 * @example
 *      const { cat } = useSelector(( state: IRootState ) => state.animal);
 */
export type IRootState = ReturnType<typeof reducers>;
