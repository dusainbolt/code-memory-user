import {
  GetSeoHomeAction,
  GetSeoHomeSuccessAction,
  GET_SEO_HOME,
  GET_SEO_HOME_SUCCESS,
} from "@Redux/actionsTypes/seoHomeActionTypes";
import { SeoHome } from "src/types/SeoHomeModel";

export const getSeoHome = (): GetSeoHomeAction => ({
  type: GET_SEO_HOME,
});

export const getSeoHomeSuccess = (
  seoHomePayload: SeoHome
): GetSeoHomeSuccessAction => ({
  type: GET_SEO_HOME_SUCCESS,
  seoHomePayload,
});
