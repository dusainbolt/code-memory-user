import { gql } from '@apollo/client';
import { SearchTagInput } from '@Models/TagModel';
import { TagResolver } from '@Resolver/tagResolver';
import RequestService from '@Services/requestService';

const requestService = new RequestService();

const getListTagQuery = gql`
  query ListTagQuery($input: SearchTagInput!) {
    listTags(input: $input) {
      dataTags {
        ${TagResolver}
      }
    }
  }
`;

export const getListTagRequest = (input: SearchTagInput, fetchPolicy?: any): any => {
  return requestService.query(getListTagQuery, { input }, 'listTags', fetchPolicy);
};
