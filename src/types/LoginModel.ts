import { User } from './UserModel';

export interface LoginInput {
  credential: string;
  password: string;
}

export interface LoginSlice {
  token?: string;
  messageError?: string;
  user: User;
  loadingLogin: boolean;
}

export type LoginHashCookie = {
  token: string;
};
