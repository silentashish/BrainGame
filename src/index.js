import React from 'react';
import {GameLevel} from './Pages';
import reducer from './Redux/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Pages from './Routes';

const store = createStore(reducer);

export default App = () => (
  <Provider store={store}>
    <Pages />
  </Provider>
);
