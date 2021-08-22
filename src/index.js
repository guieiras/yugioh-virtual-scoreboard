import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import Game from './Game';
import Landing from './Landing';
import Show from './Show';
import Remote from './Remote';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'

ReactDOM.render(
  <Router>
    <Landing path="/" />
    <Show path="/show" />
    <Remote path="/remote" />
    <Game path="game/:gameId" />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
