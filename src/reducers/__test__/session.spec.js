import sessionsReducer from '../sessions';

const initialState = ['', false, ''];
describe('Session reducer', () => {
  it('returns the initial state', () => {
    expect(sessionsReducer(undefined, {})).toEqual(initialState);
  });
});
