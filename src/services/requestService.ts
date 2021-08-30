import { FETCH_POLICY } from '@Constants/constant';
import { apolloInstance, ApolloType } from '@GraphQL/apolloConnect';
import { DocumentNode } from 'graphql';
export default class RequestService {
  client: ApolloType = null;
  constructor() {
    this.client = apolloInstance;
  }

  handleResponse =
    (callback = '') =>
      (res: any): any => {
        return callback ? res.data[callback] : res.data;
      };

  query = async (query: DocumentNode, variables: any = {}, callback = '', fetchPolicy: any = FETCH_POLICY.DEFAULT): Promise<any> => {
    // if (fetchPolicy === FETCH_POLICY.NO_CACHE) {
    //   await this.client.resetStore();
    // }
    return await this.client.query({ query, variables, fetchPolicy }).then(this.handleResponse(callback));
  };

  mutation = (mutation: DocumentNode, variables: any = {}, callback = ''): any => {
    return this.client.mutate({ mutation, variables }).then(this.handleResponse(callback));
  };
}
