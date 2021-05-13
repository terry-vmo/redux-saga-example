export const ActionTypes = {
  GET_CHANEL: 'GET_CHANEL',
  GET_CHANEL_SUCCESS: 'GET_CHANEL_SUCCESS',
  GET_CHANEL_ERROR: 'GET_CHANEL_ERROR',
};

export const actions = {
  getChanel: function (chanelId) {
    return {
      type: ActionTypes.GET_CHANEL,
      payload: chanelId,
    };
  },
  getChanelSuccess: function (success) {
    return {
      type: ActionTypes.GET_CHANEL_SUCCESS,
      payload: success,
    };
  },
  getChanelError: function (error) {
    return {
      type: ActionTypes.GET_CHANEL_ERROR,
      payload: error,
    };
  },
};
