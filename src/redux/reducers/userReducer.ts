import { User } from "@Models/user.dto";
import *as userActionTypes from "@Redux/actionsTypes/userActionTypes";

export const userReducer = (state: User = {}, action: userActionTypes.UserAction): User => {
    switch (action.type) {
        case userActionTypes.SET_USER:
            return { ...state, ...action.user };
        default:
            return state;
    }
};