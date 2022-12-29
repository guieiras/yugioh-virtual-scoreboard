import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  Route
} from 'react-router-dom';
import Game from './Game';
import Landing from './Landing';
import Show from './Show';
import Remote from './Remote';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route element={<Landing />} path="/" />
      <Route element={<Show />} path="/show" />
      <Route element={<Remote />} path="/remote" />
      <Route element={<Game />} path="game/:gameId" />
    </Route>
  )
);

createRoot(document.getElementById('root'))
  .render(<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
