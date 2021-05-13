import Config from '../common/config';
import { api } from './api';

export const loginUrl = (email, password) => {
  return api.post(`${Config.HOST_DEV}/users/login`, {
    email,
    password,
  });
};

export const registerUrl = (email, password, fullname, number_phone) => {
  return api.post(`${Config.HOST_DEV}/users/`, {
    email,
    password,
    fullname,
    number_phone,
  });
};
