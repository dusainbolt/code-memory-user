import { gql } from '@apollo/client';
import { ENTIRE_LIMIT } from '@Constants/constant';
import { EntireTagInput, SearchTagInput, TagStatus } from '@Models/TagModel';
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

const getLEntireTagQuery = gql`
  query Query($entireTagsInput: EntireTagInput!) {
    entireTags(input: $entireTagsInput) {
      slug
    }
  }
`;

export const getListTagRequest = (input: SearchTagInput, fetchPolicy?: any): any => {
  return requestService.query(getListTagQuery, { input }, 'listTags', fetchPolicy);
};

export const getEntireTags = async (): Promise<any> => {
  return await requestService.query(
    getLEntireTagQuery,
    {
      entireTagsInput: {
        status: [TagStatus.ACTIVE],
      } as EntireTagInput,
    },
    'entireTags'
  );
};
