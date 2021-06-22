import { gql } from '@apollo/client';
import { LoginInput } from '@Components/Login/LoginForm';
import { initializeApollo } from './apollo-connect';
// import client from './apollo-connect';

const client = initializeApollo();

export const postLoginRequest = (input: LoginInput): any => {
    console.log(12321321);
    return client
        .mutate({
            mutation: gql` mutation LoginMutation($credential: String!, $password: String!){
                login(input: {credential: $credential, password: $password} ){
                    token
                    user {
                        id,
                        email,
                        firstName,
                        password,
                        lastName,
                        avatar,
                        facebook
                    }
                }
              }
                
            `,
            variables: { ...input }
        })
        .then(res => res.data.seoHome);
};
