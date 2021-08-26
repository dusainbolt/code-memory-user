import { SeoHome } from './../types/SeoHomeModel';
import { gql } from '@apollo/client';
import RequestService from '@Services/requestService';

const requestService = new RequestService();

export const seoHomeQuery = gql`
  {
    seoHome {
      owner
      appName
      keyWord
      author
      publisher
      contact {
        address
        email
        phone
      }
      social {
        youtube
        facebook
        facebookPage
        skype
        twitter
      }
      meta {
        title
        description
        imageUrl
        domain
        jsonType
        logoUrl
        logoWidth
        logoHeight
        facebookPageId
      }
    }
  }
`;

export const getSeoHomeRequest = async (): Promise<SeoHome> => {
  return await requestService.query(seoHomeQuery, {}, 'seoHome');
};
