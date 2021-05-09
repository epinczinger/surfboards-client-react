import favouritesReducer from "../favourites";

const initialState = [];
describe("Fav reducer", () => {
  it("returns the initial state", () => {
    expect(favouritesReducer(undefined, {})).toEqual(initialState);
  });
});
