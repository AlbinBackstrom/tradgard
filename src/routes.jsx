import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Contact from './sites/contact';
import Home from './sites/home';
import Pruning from './sites/pruning';
import Grass from './sites/grass';
import Stones from './sites/stones';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }, {
    path: '/pruning',
    element: <Pruning />,
  }, {
    path: '/stenanlaggning',
    element: <Stones />,
  }, {
    path: '/grass',
    element: <Grass />,
  }, {
    path: '/contact',
    element: <Contact />,
  },
]);
export default routes;
