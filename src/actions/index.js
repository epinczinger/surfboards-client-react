import axios from 'axios';

const SERVER_URL = 'https://surfshop-api.herokuapp.com';

export const getFavourites = (authToken) => (dispatch) => {
  axios({
    method: 'get',
    url: `${SERVER_URL}/favourites`,
    headers: {
      Accept: 'application/json',
      mode: 'cors',
      Authorization: authToken,
    },
  })
    .then((response) => {
      dispatch({
        type: 'GET_FAVOURITES',
        payload: response.data,
      });
    })
    .catch((error) => dispatch({
      type: 'FAVOURITES_ERROR',
      payload: error,
    }));
};

export const getProducts = () => (dispatch) => {
  axios({
    method: 'get',
    url: `${SERVER_URL}/products`,
    headers: {
      Accept: 'application/json',
      mode: 'cors',
    },
  })
    .then((response) => {
      dispatch({
        type: 'GET_PRODUCTS',
        payload: response.data,
      });
    })
    .catch((error) => dispatch({
      type: 'GET_PRODUCTS_ERROR',
      payload: error,
    }));
};

export const createFavourite = (
  authToken,
  {
    id, model, brand, price, img, category,
  },
) => (dispatch) => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/favourites`,
    data: {
      product_id: id,
    },
    headers: {
      Accept: 'application/json',
      mode: 'cors',
      Authorization: authToken,
    },
  })
    .then((response) => {
      if (response) {
        dispatch({
          type: 'CREATE_FAVOURITE',
          payload: {
            id, model, brand, price, img_url: img, category,
          },
        });
      }
    })
    .catch((error) => dispatch({
      type: 'FAVOURITES_ERROR',
      payload: error,
    }));
};

export const deleteFavourite = (
  authToken,
  {
    id, model, brand, price, img, category,
  },
) => (dispatch) => {
  axios({
    method: 'delete',
    url: `${SERVER_URL}/favourites`,
    data: {
      product_id: id,
    },
    headers: {
      Accept: 'application/json',
      mode: 'cors',
      Authorization: authToken,
    },
  })
    .then((response) => {
      if (response) {
        dispatch({
          type: 'DELETE_FAVOURITE',
          payload: {
            id,
            model,
            brand,
            price,
            img_url: img,
            category,
          },
        });
      }
    })
    .catch((error) => dispatch({
      type: 'FAVOURITES_ERROR',
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
        dispatch({ type: 'SIGN_ERROR', payload: 'There is a problem with your email/password.' });
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

export const signOut = (authToken) => (dispatch) => {
  axios({
    method: 'delete',
    url: `${SERVER_URL}/users/sign_out`,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  }).then(() => {
    dispatch({
      type: 'SIGN_OUT',
    });
  }).catch((error) => dispatch({ type: 'SIGN_ERROR', payload: error }));
};

export const resetError = () => (dispatch) => {
  dispatch({ type: 'RESET_SIGN_ERROR' });
};

export const localStorageSignIn = (token) => {
  const sessionData = [token, true];
  return {
    type: 'LOCAL_STORAGE_SIGN_IN',
    payload: sessionData,
  };
};
