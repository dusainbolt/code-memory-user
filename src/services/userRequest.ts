import { gql } from '@apollo/client';
import client from "./apollo-connect";

export const getDataUsers = async () => {
    return await client.query({
        query: gql`
            query users {
                users {
                    id,
                    username,
                }
            }
        `,
    });
}