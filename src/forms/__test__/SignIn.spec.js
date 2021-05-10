import React from "react";
import renderer from "react-test-renderer";
import SignIn from "../../forms/SignIn";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../reducers";

describe("The SignIn component", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignIn />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
