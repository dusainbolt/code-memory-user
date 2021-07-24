import { User } from '@Models/UserModel';

export const USER_ACTION_TYPES = 'userActionTypes';

export const SET_USER = `${USER_ACTION_TYPES}/SET_USER`;
export interface SetUserAction {
  type: typeof SET_USER;
  user: User;
}

export const USER_START_APP = `${USER_ACTION_TYPES}/USER_START_APP`;
export interface UserStartAppAction {
  type: typeof USER_START_APP;
}

export type UserAction = {
  type: string;
  user: User;
};
