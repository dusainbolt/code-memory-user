import { SeoHome } from "src/models/seo-home";

export const SEO_HOME_ACTION_TYPES = 'seoHomeActionTypes';

export const GET_SEO_HOME = `${SEO_HOME_ACTION_TYPES}/GET_SEO_HOME_REQUEST`;

export const GET_SEO_HOME_SUCCESS = `${SEO_HOME_ACTION_TYPES}/GET_SEO_HOME_SUCCESS`;
export interface GetSeoHomeSuccessAction {
    type: typeof GET_SEO_HOME_SUCCESS;
    seoHomePayload: SeoHome;
}

export interface GetSeoHomeAction {
    type: typeof GET_SEO_HOME;
}

export type SeoHomeAction = {
    type: string;
    seoHomePayload: SeoHome;
};
