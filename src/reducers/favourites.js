const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVOURITES':
      return [...action.payload.accesories, ...action.payload.surfboards];
    case 'FAVOURITES_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;
