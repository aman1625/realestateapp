import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Map from './components/map/';
import { Router } from '@reach/router';
import 'tachyons';
import Property from './Property'




ReactDOM.render(
	
  <React.StrictMode>
  <Router>
  <App default />
  <Property path="Card" />
  </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);

/// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();