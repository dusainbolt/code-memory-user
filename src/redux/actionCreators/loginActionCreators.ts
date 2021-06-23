import { POST_LOGIN_REQUESTING, postLoginAction } from '@Redux/actionsTypes/loginActionTypes';
import { LoginInput } from 'src/models/login-dto';

export const postLogin = (loginInput: LoginInput): postLoginAction => {
    return {
        type: POST_LOGIN_REQUESTING,
        loginInput,
    };
};
// import * as actions from '../actionTypes/lyricsActionTypes';

// export function setLyrics(lyrics: string): actions.SetLyricsAction {
//     return {
//         type: actions.SET_LYRICS,
//         lyrics,
//     };
// }

// export function getLyrics(artist: string, song: string): actions.GetLyricsAction {
//     return {
//         type: actions.GET_LYRICS,
//         artist,
//         song,
//     };
// }

// export function getLyricsRequest(): actions.GetLyricsRequestAction {
//     return {
//         type: actions.GET_LYRICS_REQUEST,
//     };
// }

// export function getLyricsSuccess(lyrics: string): actions.GetLyricsSuccessAction {
//     return {
//         type: actions.GET_LYRICS_SUCCESS,
//         lyrics,
//     };
// }

// export function getLyricsFailure(error: Error | string): actions.GetLyricsFailureAction {
//     return {
//         type: actions.GET_LYRICS_FAILURE,
//         error,
//     };
// }
