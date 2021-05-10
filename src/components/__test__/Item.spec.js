import React from "react";
import renderer from "react-test-renderer";
import Item from "../Item";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../reducers";

describe("The Item component", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Item />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
