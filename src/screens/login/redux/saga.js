import { put, takeLatest } from 'redux-saga/effects';
import { actions, ActionTypes } from './actions';
import { setTokenHeader, StatusCodes } from '../../../services/api';
import { loginUrl } from '../../../services/userAPI';

function* callLoginAPI(action) {
  try {
    const { email, password } = action.payload;
    const response = yield loginUrl(email, password);
    if (response && response.status === StatusCodes.SUCCESS) {
      // set header khi call api
      setTokenHeader(response.data.jwt_token);
      yield put(actions.loginSuccess(response.data.jwt_token));
    } else {
      yield put(actions.loginError(''));
    }
  } catch (e) {
    console.log('err', e);
    yield put(actions.loginError(e));
  }
}

export function* watchLogin() {
  yield takeLatest(ActionTypes.LOGIN, callLoginAPI);
}
