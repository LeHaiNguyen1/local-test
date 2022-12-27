import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/montserrat";
import "@fontsource/poppins";
import Caro from './components/Caro';
import Lobby from './components/Lobby';
import Flapbird from './components/Flapbird';
import Bubbles from './components/Bubbles';
import Goldegg from './components/Goldegg';
import Therock from './components/Therock';

import { RouterProvider,createBrowserRouter, BrowserRouter , Routes, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: "/caro",
    element: <Caro />,
  },
  {
    path: "/lobby",
    element: <Lobby />,
  },
  {
    path: "/flapbird",
    element: <Flapbird />,
  },
  {
    path: "/bubbles",
    element: <Bubbles />,
  },
  {
    path: "/goldegg",
    element: <Goldegg />,
  },
  {
    path: "/therock",
    element: <Therock />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);