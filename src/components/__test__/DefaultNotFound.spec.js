import React from "react";
import renderer from "react-test-renderer";
import DefaultNotFound from "../DefaultNotFound";

describe("The DefaultNotFound component", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer.create(<DefaultNotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
