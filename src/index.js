import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import EnviarAFirebase from './firebase/EnviarAFirebase';
import { store } from './redux/store/store';
import AppRoutes from './routes/AppRoutes';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>,
  document.getElementById('root')
);

