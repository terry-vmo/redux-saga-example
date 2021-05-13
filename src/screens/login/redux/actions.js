export const ActionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
};

export const actions = {
  login: function (loginInfo) {
    return {
      type: ActionTypes.LOGIN,
      payload: loginInfo,
    };
  },
  loginSuccess: function (success) {
    return {
      type: ActionTypes.LOGIN_SUCCESS,
      payload: success,
    };
  },
  loginError: function (error) {
    return {
      type: ActionTypes.LOGIN_ERROR,
      payload: error,
    };
  },
};
