export const LOADING_ACTION_TYPES = 'loadingActionTypes';

export const SET_VISIBLE_LOADING_AUTH = `${LOADING_ACTION_TYPES}/SET_VISIBLE_LOADING_AUTH`;
export interface SetVisibleLoadingAuth {
    type: typeof SET_VISIBLE_LOADING_AUTH;
    visible: boolean;
}

export const SET_MESSAGE_TRY_CATH_SERVER = `${LOADING_ACTION_TYPES}/SET_MESSAGE_TRY_CATH_SERVER`;
export interface SetTryCatchServer {
    type: typeof SET_MESSAGE_TRY_CATH_SERVER;
    messageCrash: string;
}

export type LoadingAction = {
    type: string;
    messageCrash: string;
};
