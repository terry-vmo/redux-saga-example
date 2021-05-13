const axios = require('axios');

export const StatusCodes = {
  SUCCESS: 200,
  UNAUTHENTICATED: 401,
};

let HEADERS = {
  'Content-Type': 'application/json',
  // 'Content-Type': 'application/json',
};

let HEADERS_MULTIPLE_PART = {
  'Content-Type': 'application/json',
  // 'Content-Type': 'multipart/form-data',
};

const TIMEOUT = 30000;

export const setTokenHeader = token => {
  HEADERS = {
    ...HEADERS,
    'api-token': token,
  };
  HEADERS_MULTIPLE_PART = {
    ...HEADERS_MULTIPLE_PART,
    'api-token': token,
  };
};

// call api
// javascrip string, Object
const api = {
  post: (endpoint, params) => {
    return axios.default
      .post(endpoint, params, {
        headers: HEADERS,
        timeout: TIMEOUT,
        validateStatus: status =>
          status === 200 || status === 400 || status === 401 || status === 500,
      })
      .then(
        response => {
          return response.data;
        },
        err => {
          return err.response || err;
        },
      );
  },

  postMultiplePart: (endpoint, params) => {
    return axios.default
      .post(endpoint, params, {
        headers: HEADERS_MULTIPLE_PART,
        timeout: TIMEOUT,
        validateStatus: status =>
          status === 200 || status === 400 || status === 401 || status === 500,
      })
      .then(
        response => {
          return response.data;
        },
        err => {
          return err.response || err;
        },
      );
  },

  get: (endpoint, params) => {
    return axios.default
      .get(endpoint, {
        params,
        headers: HEADERS,
        timeout: TIMEOUT,
        validateStatus: status =>
          status === 200 || status === 400 || status === 500,
      })
      .then(
        response => {
          return response.data;
        },
        err => {
          return err.response || err;
        },
      );
  },

  put: (endpoint, params) => {
    return axios.default
      .put(endpoint, params, {
        headers: HEADERS,
        timeout: TIMEOUT,
        validateStatus: status =>
          status === 200 || status === 400 || status === 500,
      })
      .then(
        response => {
          return response.data;
        },
        err => {
          return err.response || err;
        },
      );
  },

  delete: (endpoint, params) => {
    return axios.default
      .delete(endpoint, {
        params,
        headers: HEADERS,
        timeout: TIMEOUT,
        validateStatus: status =>
          status === 200 || status === 400 || status === 500,
      })
      .then(
        response => {
          return response.data;
        },
        err => {
          return err.response || err;
        },
      );
  },
};
export { api };
