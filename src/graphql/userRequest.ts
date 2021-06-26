import { gql } from '@apollo/client';
import RequestService from '@Services/requestService';
import { LoginInput } from 'src/models/login-dto';

const requestService = new RequestService();

const postLoginQuery = gql` mutation LoginMutation($credential: String!, $password: String!){
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
`;

export const postLoginRequest = (variables: LoginInput): any => {
    return requestService.mutation(postLoginQuery, variables, 'login');
};