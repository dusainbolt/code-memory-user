import { SeoHome } from '@Common/Meta';

export const SEO_HOME_ACTION_TYPES = 'seoHomeActionTypes';

export const GET_SEO_HOME = `${SEO_HOME_ACTION_TYPES}/GET_SEO_HOME_REQUEST`;
export interface GetSeoHomeAction {
    type: typeof GET_SEO_HOME;
}

export const GET_SEO_HOME_SUCCESS = `${SEO_HOME_ACTION_TYPES}/GET_SEO_HOME_SUCCESS`;
export interface GetSeoHomeSuccessAction {
    type: typeof GET_SEO_HOME_SUCCESS;
    payload: SeoHome;
}

export type SeoHomeAction = GetSeoHomeSuccessAction | GetSeoHomeAction;
