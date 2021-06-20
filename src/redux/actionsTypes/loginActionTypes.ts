import { LoginInput } from '@Components/Login/LoginForm';

export const LOGIN_ACTION_TYPES = 'loginActionTypes';

export const POST_LOGIN = `${LOGIN_ACTION_TYPES}/POST_LOGIN`;
export interface postLoginAction {
    type: typeof POST_LOGIN;
    loginInput: LoginInput;
}

export const SHOW_LOADING_AUTH = `${LOGIN_ACTION_TYPES}/SHOW_LOADING_AUTH`;
export interface showLoadingAuth {
    type: typeof SHOW_LOADING_AUTH;
}

export type loginAction = postLoginAction | showLoadingAuth;

// export const SET_LYRICS = 'lyricsActionTypes/SET_LYRICS';
// export interface SetLyricsAction {
//     type: typeof SET_LYRICS;
//     lyrics: string;
// }

// export const GET_LYRICS = 'lyricsActionTypes/GET_LYRICS';
// export interface GetLyricsAction {
//     type: typeof GET_LYRICS;
//     artist: string;
//     song: string;
// }

// export const GET_LYRICS_REQUEST = 'lyricsActionTypes/GET_LYRICS_REQUEST';
// export interface GetLyricsRequestAction {
//     type: typeof GET_LYRICS_REQUEST;
// }

// export const GET_LYRICS_SUCCESS = 'lyricsActionTypes/GET_LYRICS_SUCCESS';
// export interface GetLyricsSuccessAction {
//     type: typeof GET_LYRICS_SUCCESS;
//     lyrics: string;
// }

// export const GET_LYRICS_FAILURE = 'lyricsActionTypes/GET_LYRICS_FAILURE';
// export interface GetLyricsFailureAction {
//     type: typeof GET_LYRICS_FAILURE;
//     error: Error | string;
// }
