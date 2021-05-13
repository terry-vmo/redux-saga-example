import { combineReducers } from 'redux';
import loginReducer from '../../screens/login/redux/reducer';
import homeReducer from '../../screens/home/redux/reducer';

export default combineReducers({
  loginReducer,
  homeReducer,
});
