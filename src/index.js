import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './welcome-component/welcome';
import Navbar from './navbar-component/navbar'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);
