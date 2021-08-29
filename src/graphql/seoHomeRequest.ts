import { SeoHome } from './../types/SeoHomeModel';
import { gql } from '@apollo/client';
import RequestService from '@Services/requestService';
import { RESPONSE_SEO_HOME, SeoHomeResolver } from './resolver/seoHomeResolver';

const requestService = new RequestService();

export const seoHomeQuery = gql`
  {
    ${RESPONSE_SEO_HOME.getSeoHome} {
      ${SeoHomeResolver}
    }
  }
`;

export const getSeoHomeRequest = async (): Promise<SeoHome> => {
  return await requestService.query(seoHomeQuery, {}, RESPONSE_SEO_HOME.getSeoHome);
};
