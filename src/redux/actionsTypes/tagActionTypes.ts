import { SearchTagInput, SearchTagOutput } from '@Models/TagModel';
import { PayloadName } from './loginActionTypes';

export type GetListTagAction = Record<
  PayloadName,
  {
    input: SearchTagInput;
    fetchPolicy?: any;
  }
>;

export type GetListTagSuccessAction = Record<PayloadName, SearchTagOutput>;
