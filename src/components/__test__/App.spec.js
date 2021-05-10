import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../reducers";

describe("The App component", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
