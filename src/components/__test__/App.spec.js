import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../../reducers';

describe('The App component', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
