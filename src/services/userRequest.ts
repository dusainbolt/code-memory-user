import { gql } from '@apollo/client';
import { initializeApollo } from './apollo-connect';
// import client from './apollo-connect';

const client = initializeApollo();

export const getDataUsers = async () => {
    return client.query({
        query: gql`
            query users {
                users {
                    id
                    username
                }
            }
        `,
    });
};
