import { User } from "src/types/UserModel";
import * as userActionTypes from "@Redux/actionsTypes/userActionTypes";

export const actionUser = {
  setUser: (user: User): userActionTypes.SetUserAction => ({
    type: userActionTypes.SET_USER,
    user,
  }),
  userStartApp: (): userActionTypes.UserStartAppAction => ({
    type: userActionTypes.USER_START_APP,
  }),
};
