const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVOURITES':
      return [...action.payload.accesories, ...action.payload.surfboards];
    case 'CREATE_FAVOURITES':
      return [...state, action.payload];
    case 'DELETE_FAVOURITES': {
      const index = state.indexOf(action.payload);
      const stateCopy = [...state];
      stateCopy.splice(index, 1);
      return stateCopy; }
    case 'FAVOURITES_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;
