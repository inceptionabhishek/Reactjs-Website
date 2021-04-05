import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RandomData from './RandomData'
import UserName from './UserName'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <UserName />,
document.getElementById('root-user-Name')
);
ReactDOM.render(
  <RandomData />,
document.getElementById('root-random')
);
reportWebVitals();
