import { SeoHome } from './../types/SeoHomeModel';
import { gql } from '@apollo/client';
import RequestService from '@Services/requestService';
import { SeoHomeResolver } from '@Resolver/seoHomeResolver';

const requestService = new RequestService();

export const seoHomeQuery = gql`
  {
    seoHome {
      ${SeoHomeResolver}
    }
  }
`;

export const getSeoHomeRequest = async (): Promise<SeoHome> => {
  return await requestService.query(seoHomeQuery, {}, 'seoHome');
};
