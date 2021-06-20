import { SeoHome } from '@Common/Meta';
import * as actions from '@Redux/actionsTypes/seoHomeActionTypes';

// export interface loginState {
//     login: user;
// }

// const initialState: loginState = {
//     user: null
// };

// export default function loginReducer(state: LyricsState = initialState, action: loginAction): LyricsState {
//     switch (action.type) {
//         case actions.SET_LYRICS:
//         case actions.GET_LYRICS_SUCCESS:
//             return {
//                 lyrics: action.lyrics,
//             };
//         default:
//             return state;
//     }
// }

export function seoHomeReducer(state: SeoHome = {}, action: actions.SeoHomeAction): SeoHome {
    switch (action.type) {
        case actions.GET_SEO_HOME_SUCCESS:
            return {
                ...state,
                ...action.data,
            };
    }
}
