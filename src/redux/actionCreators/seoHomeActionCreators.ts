import { GetSeoHomeAction, GET_SEO_HOME } from '@Redux/actionsTypes/seoHomeActionTypes';

export const getSeoHome = (): GetSeoHomeAction => {
    return {
        type: GET_SEO_HOME,
    };
};
