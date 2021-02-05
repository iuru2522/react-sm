import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,

      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me()
    .then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false))
      } else {
       let message = response.data.messages.length > 0 ?response.data.messages[0] : "Some error";
        dispatch("login", {_error: "Common error"});
      }
    });
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    });
}

export default authReducer;
