/* eslint-disable react/jsx-filename-extension */
/**
 * ************************************
 *
 * @module  index.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description entry point for application.  Hangs React app off of #root in index.html
 *
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
