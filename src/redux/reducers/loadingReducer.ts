import { Action } from 'redux';

export interface IsLoadingState {
    [key: string]: boolean;
}

const getLoadingMatches = (actionType: string) => /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(actionType);

export const isLoadingReducer = (state: IsLoadingState = {}, action: Action) => {
    const matches = getLoadingMatches(action.type);
    if (!matches) {
        return state;
    }

    const [, requestName, requestStatus] = matches;
    return {
        ...state,
        [requestName]: requestStatus === 'REQUEST',
    };
};
