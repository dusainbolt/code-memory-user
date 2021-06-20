import { SeoHome } from '@Common/Meta';
import * as actions from '@Redux/actionsTypes/seoHomeActionTypes';

export const seoHomeReducer = (state: SeoHome = {}, action: actions.GetSeoHomeAction): SeoHome => {
    switch (action.type) {
        case actions.GET_SEO_HOME_SUCCESS:
            return {
                ...state,
            };
        default:
            return state;
    }
};
