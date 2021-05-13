import { put, takeLatest } from 'redux-saga/effects';
import { actions, ActionTypes } from './actions';
import { StatusCodes } from '../../../services/api';
import { getChanel } from '../../../services/chanelAPI';

function* callGetChanelAPI(action) {
  try {
    const chanelId = action.payload;
    const response = yield getChanel(chanelId);
    console.log('response', response);

    if (response && response.status === StatusCodes.SUCCESS) {
      yield put(actions.getChanelSuccess(response.data));
    } else {
      yield put(actions.getChanelError(''));
    }
  } catch (e) {
    console.log('err', e);
    yield put(actions.getChanelError(e));
  }
}

export function* watchGetChanel() {
  yield takeLatest(ActionTypes.GET_CHANEL, callGetChanelAPI);
}
