import { User } from 'src/types/UserModel';
import { LoginInput, LoginSlice } from 'src/types/LoginModel';

export const LOGIN_ACTION_TYPES = 'loginActionTypes';

export const POST_LOGIN_REQUESTING = `${LOGIN_ACTION_TYPES}/POST_LOGIN_REQUESTING`;
export interface postLoginAction {
  type: typeof POST_LOGIN_REQUESTING;
  loginInput: LoginInput;
}
export const POST_LOGIN_SUCCESS = `${LOGIN_ACTION_TYPES}/POST_LOGIN_SUCCESS`;
export interface postLoginActionSuccess {
  type: typeof POST_LOGIN_SUCCESS;
  token: string;
}

export const POST_LOGIN_ERROR = `${LOGIN_ACTION_TYPES}/POST_LOGIN_ERROR`;
export interface postLoginActionError {
  type: typeof POST_LOGIN_ERROR;
  messageError: string;
}

export type loginAction = {
  type: string;
  loginInput: LoginInput;
  token: string;
  messageError: string;
};

// export interface LoginActionInput {
//   payload: {};
// }

type PayloadName = 'payload';

export type LoginActionInput = Record<
  PayloadName,
  {
    input: LoginInput;
  }
>;

export type LoginOutput = Pick<LoginSlice, 'token' | 'user'>;

export type LoginActionOutput = Record<PayloadName, LoginOutput>;
