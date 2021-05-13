import { ActionTypes } from './actions';

const DEFAULT_STATE = {
  isLoading: false,
  chanelInfo: null,
  error: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHANEL:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_CHANEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chanelInfo: action.payload,
      };
    case ActionTypes.GET_CHANEL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'error',
      };
    default:
      return state;
  }
};
