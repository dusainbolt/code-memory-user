import { Tag } from './../../types/TagModel';
import { SearchTagOutput } from '@Models/TagModel';
import { PayloadName } from './loginActionTypes';

export type getTagDetailSuccessAction = Record<
  PayloadName, Tag
>;

export type GetListTagSuccessAction = Record<PayloadName, SearchTagOutput>;
