import React from "react";
import renderer from "react-test-renderer";
import SignUp from "../../forms/SignUp";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../reducers";

describe("The SignUp component", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignUp />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
