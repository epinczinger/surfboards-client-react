import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";
import { BrowserRouter as Router } from 'react-router-dom';

describe("The Home component", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer
      .create(
        <Router>
          <Home />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
