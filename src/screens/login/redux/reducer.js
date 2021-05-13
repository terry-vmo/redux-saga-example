import { ActionTypes } from './actions';

const DEFAULT_STATE = {
  isLoading: false,
  jwt_token: '',
  error: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jwt_token: action.payload.jwt_token,
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'error',
      };
    default:
      return state;
  }
};
