import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import './index.css';
import './app/sass/main.scss';
import Routs from './app/router/Routs';

import { Provider } from "react-redux";
import generateStore from "../src/redux/store";

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routs />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

