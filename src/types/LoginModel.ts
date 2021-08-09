import { User } from './UserModel';

export interface LoginInput {
  credential: string;
  password: string;
}

export interface LoginOutput {
  token: string;
  User: User;
}

export interface Login {
  token?: string;
  messageError?: string;
}

export type LoginHashCookie = {
  token: string;
};
