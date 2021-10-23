import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import './index.css';
import './app/sass/main.scss';
import Routs from './app/router/Routs';

ReactDOM.render(
  <React.StrictMode>
    <Routs />
  </React.StrictMode>,
  document.getElementById('root')
);

