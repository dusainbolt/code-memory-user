import { SeoHome } from '@Common/Meta';
import * as actions from '@Redux/actionsTypes/seoHomeActionTypes';

export const seoHomeReducer = (state: SeoHome = {}, action: actions.SeoHomeAction): SeoHome => {
    switch (action.type) {
        case actions.GET_SEO_HOME_SUCCESS:
            return action.seoHomePayload;
        default:
            return state;
    }
};
