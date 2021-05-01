import axios from 'axios';

export const getSurfboards = () => (dispatch) => {
  axios({
    method: 'get',
    url: 'https://surfshop-api.herokuapp.com/surfboards',
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
    url: 'https://surfshop-api.herokuapp.com/accesories',
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
