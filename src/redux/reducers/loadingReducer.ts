import * as actions from '../actionsTypes/loadingActionTypes';
export interface IsLoadingState {
    [key: string]: boolean;
}

const getLoadingMatches = (actionType: string) => /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(actionType);

export const isLoadingReducer = (state: IsLoadingState = {}, action: actions.LoadingAction) => {
    switch (action.type) {
        case actions.SET_VISIBLE_LOADING_AUTH:
            return {
                ...state,
                loadingAuth: action.visible,
            };
        default:
            const matches = getLoadingMatches(action.type);
            if (!matches) {
                return state;
            }

            const [, requestName, requestStatus] = matches;
            return {
                ...state,
                [requestName]: requestStatus === 'REQUEST',
            };
    }
};
