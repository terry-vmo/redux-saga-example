import { all } from 'redux-saga/effects';
import { watchGetChanel } from '../../screens/home/redux/saga';
import { watchLogin } from '../../screens/login/redux/saga';

function* rootSaga() {
  yield all([watchLogin(), watchGetChanel()]);
}

export default rootSaga;
