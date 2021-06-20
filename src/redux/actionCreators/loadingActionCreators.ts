import { SetVisibleLoadingAuth, SET_VISIBLE_LOADING_AUTH } from '@Redux/actionsTypes/loadingActionTypes';

export const setVisibleLoadingAuth = (visible: boolean): SetVisibleLoadingAuth => {
    return {
        type: SET_VISIBLE_LOADING_AUTH,
        visible,
    };
};
