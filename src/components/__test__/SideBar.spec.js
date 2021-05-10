import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SideBar from '../SideBar';
import store from '../../reducers';

describe('The SideBar component', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SideBar />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
