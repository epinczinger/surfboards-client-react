const accesoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ACCESORIES':
      return action.payload;
    case 'GET_ACCESORIES_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default accesoriesReducer;
