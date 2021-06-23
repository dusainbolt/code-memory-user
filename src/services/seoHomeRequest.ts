import { gql } from '@apollo/client';
import RequestService from './requestService';

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

export const getSeoHomeRequest = (): any => {
    return requestService.query(seoHomeQuery, {}, 'seoHome');

};
