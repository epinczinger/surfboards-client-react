import productsReducer from '../products';

const initialState = [];
describe('Products reducer', () => {
  it('returns the initial state', () => {
    expect(productsReducer(undefined, {})).toEqual(initialState);
  });
});
