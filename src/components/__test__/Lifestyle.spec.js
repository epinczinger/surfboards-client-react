import React from 'react';
import renderer from 'react-test-renderer';
import Lifestyle from '../Lifestyle';

describe('The Lifestyle component', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer.create(<Lifestyle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
