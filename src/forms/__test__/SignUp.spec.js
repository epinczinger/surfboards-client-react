import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUp from '../SignUp';
import store from '../../reducers';

describe('The SignUp component', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignUp />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
