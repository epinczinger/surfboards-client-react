/* eslint-disable */
const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FAVOURITES":
      return action.payload;
    case "CREATE_FAVOURITE":
      return [...state, action.payload];
    case "DELETE_FAVOURITE": {

      const m = state.filter((i) => {
          // console.log(i.id, action.payload.id, i.kind, action.payload.kind)
        parseInt(i.id) !== parseInt(action.payload.id) && i.kind !== action.payload.kind

        console.log(m)
        }  ) 
        return m}
    case "FAVOURITES_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;
