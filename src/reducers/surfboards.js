const surfboardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SURFBOARDS':
      return action.payload;
    case 'GET_SURFBOARDS_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default surfboardsReducer;
