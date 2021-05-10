import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignIn from '../SignIn';
import store from '../../reducers';

describe('The SignIn component', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignIn />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
