import { gql } from '@apollo/client';
import { initializeApollo } from './apollo-connect';

const client = initializeApollo();
// const client = useProvideAuth().createApolloClient();

export const getSeoHomeRequest = () => {
    return client
        .query({
            query: gql`
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
            `,
        })
        .then(res => res.data.seoHome);
};
