const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVOURITES':
      return action.payload;
    case 'CREATE_FAVOURITE':
      return [...state, action.payload];
    case 'DELETE_FAVOURITE': {
      const modState = state.filter((p) => parseInt(p.id, 10) !== parseInt(action.payload.id, 10));
      return modState;
    }
    case 'FAVOURITES_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;
