export const LOADING_ACTION_TYPES = 'loadingActionTypes';

export const SET_VISIBLE_LOADING_AUTH = `${LOADING_ACTION_TYPES}/SET_VISIBLE_LOADING_AUTH`;
export interface SetVisibleLoadingAuth {
    type: typeof SET_VISIBLE_LOADING_AUTH;
    visible: boolean;
}

export type LoadingAction = SetVisibleLoadingAuth;
