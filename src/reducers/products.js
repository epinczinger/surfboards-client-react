const productsReducer = (state = { surfboards: [], accesories: [] }, action) => {
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
      return { accesories, surfboards };
    }
    case 'PRODUCT_ERROR':
      return action.payload;
    case 'ADD_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
