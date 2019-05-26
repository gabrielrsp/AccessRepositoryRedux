import React from 'react';
import './config/reactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

console.tron.log('Testando');

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
