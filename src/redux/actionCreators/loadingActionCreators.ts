import { SetTryCatchServer, SetVisibleLoadingAuth, SET_MESSAGE_TRY_CATH_SERVER, SET_VISIBLE_LOADING_AUTH } from '@Redux/actionsTypes/loadingActionTypes';

export const setVisibleLoadingAuth = (visible: boolean): SetVisibleLoadingAuth => {
    return {
        type: SET_VISIBLE_LOADING_AUTH,
        visible,
    };
};

export const setTryCatchServer = (messageCrash: string): SetTryCatchServer => {
    return {
        type: SET_MESSAGE_TRY_CATH_SERVER,
        messageCrash,
    };
};

