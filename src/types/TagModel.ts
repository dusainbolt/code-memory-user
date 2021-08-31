import { User } from './UserModel';

export enum TagStatus {
  HIDE = 'HIDE',
  ACTIVE = 'ACTIVE',
}

export enum TagType {
  SYSTEM = 'SYSTEM',
  ADDITION = 'ADDITION',
}

export interface SearchTagInput {
  key: string;
  status: TagStatus[];
  limit: number;
  offset: number;
  sortBy?: number | string;
  orderBy?: string;
}

export interface Tag {
  createBy?: string;
  createdAt?: string;
  description?: string;
  id?: string;
  slug?: string;
  status?: TagStatus;
  tagType?: TagType;
  thumbnail?: string;
  title?: string;
  updatedAt?: string;
  userCreate?: User;
}

export type TagSlice = {
  dataNew?: Tag[];
  tagDetail: Tag
};

export type SearchTagOutput = {
  dataTags: Tag[];
}

export type FindTagBySlugInput = {
  slug: string;
}

export type EntireTagInput = {
  limit?: number,
  status: TagStatus[];
}


