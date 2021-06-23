import * as actions from '../actionsTypes/loadingActionTypes';
export interface IsLoadingState {
    [key: string]: boolean | string;
}

const getLoadingMatches = (actionType: string) => /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(actionType);

export const isLoadingReducer = (state: IsLoadingState = {}, action: actions.LoadingAction): IsLoadingState => {
    switch (action.type) {
        case actions.SET_MESSAGE_TRY_CATH_SERVER:
            return {
                ...state,
                messageCrash: action.messageCrash,
            };
        default:
            const matches = getLoadingMatches(action.type);
            if (!matches) {
                return state;
            }

            const [, requestName, requestStatus] = matches;
            return {
                ...state,
                [`${requestName}_REQUESTING`]: requestStatus === 'REQUEST',
            };
    }
};
