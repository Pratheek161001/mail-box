import { 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    LOGOUT, SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE, 
    TOGGLE_LOGIN_SIGNUP 
} from './actionTypes';

const initialState = {
  isAuthenticated: false,
  isSignUp: false,
  isLogin: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
      case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
    case SIGN_IN_FAILURE:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
      case TOGGLE_LOGIN_SIGNUP:
        return {
          ...state,
          isLogin: !state.isLogin,
        };
    default:
      return state;
  }
};

export default authReducer;