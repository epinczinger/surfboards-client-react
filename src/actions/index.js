import axios from 'axios';

const SERVER_URL = 'https://surfshop-api.herokuapp.com';

export const getSurfboards = () => (dispatch) => {
  axios({
    method: 'get',
    url: `${SERVER_URL}/surfboards`,
    headers: {
      Accept: 'application/json',
      mode: 'cors',
    },
  })
    .then((response) => {
      dispatch({
        type: 'GET_SURFBOARDS',
        payload: response.data,
      });
    })
    .catch((error) => dispatch({
      type: 'GET_SURFBOARDS_ERROR',
      payload: error,
    }));
};

export const getAccesories = () => (dispatch) => {
  axios({
    method: 'get',
    url: `${SERVER_URL}/accesories`,
    headers: {
      Accept: 'application/json',
      mode: 'cors',
    },
  })
    .then((response) => {
      dispatch({
        type: 'GET_ACCESORIES',
        payload: response.data,
      });
    })
    .catch((error) => dispatch({
      type: 'GET_ACCESORIES_ERROR',
      payload: error,
    }));
};

export const signIn = (email, password) => (dispatch) => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/users/sign_in`,
    data: {
      email,
      password,
    },
    headers: {
      Accept: 'application/json',
      mode: 'cors',
    },
  })
    .then((response) => {
      if (typeof response.headers['access-token'] === 'string') {
        window.localStorage.setItem(
          'sessionID',
          response.headers['access-token'],
        );
        dispatch({
          type: 'SIGN_IN_UP',
          payload: response.headers['access-token'],
        });
      }
    })
    .catch((error) => {
      if (error.message === 'Request failed with status code 422') {
        dispatch({ type: 'SIGN_ERROR', payload: 'Account already exists..' });
      }
    });
};

export const signUp = (email, password) => (dispatch) => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/users/sign_up`,
    data: {
      email,
      password,
    },
    headers: {
      Accept: 'application/json',
      mode: 'cors',
    },
  }).then((response) => {
    if (typeof response.headers['access-token'] === 'string') {
      window.localStorage.setItem(
        'sessionID',
        response.headers['access-token'],
      );
      dispatch({
        type: 'SIGN_IN_UP',
        payload: response.headers['access-token'],
      });
    }
  }).catch((error) => {
    if (error.message === 'Request failed with status code 422') {
      dispatch({ type: 'SIGN_ERROR', payload: 'Account already exists..' });
    }
  });
};

export const resetError = () => (dispatch) => {
  dispatch({ type: 'RESET_SIGN_ERROR' });
};
