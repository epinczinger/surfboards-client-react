const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      const accesories = [];
      const surfboards = [];
      action.payload.map((product) => {
        if (product.category === 'accesories') {
          return accesories.push(product);
        }
        return surfboards.push(product);
      });
      return [accesories, surfboards]; }
    case 'GET_PRODUCTS_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
