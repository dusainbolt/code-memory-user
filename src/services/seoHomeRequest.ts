import { gql } from '@apollo/client';
import { initializeApollo } from './apollo-connect';
import RequestService from './requestService';

const client = initializeApollo();
// const client = useProvideAuth().createApolloClient();

const requestService = new RequestService();

export const getSeoHomeRequest = () => {
    return requestService.query(gql`
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
`, {}, 'seoHome');

};
