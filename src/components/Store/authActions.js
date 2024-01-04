import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE, TOGGLE_LOGIN_SIGNUP} from './actionTypes';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const signInSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    payload: user,
  });
  
 export const signInFailure = () => ({
    type: SIGN_IN_FAILURE,
  });
  
export const toggleLoginSignup = () => ({
    type: TOGGLE_LOGIN_SIGNUP,
  });