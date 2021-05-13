import Config from '../common/config';
import { api } from './api';

export const getChanel = chanelId => {
  return api.get(`${Config.HOST_DEV}/channels/${chanelId}`);
};

export const getUsersInChanel = chanelId => {
  return api.get(`${Config.HOST_DEV}/channels/get_users_in_chanel/${chanelId}`);
};
