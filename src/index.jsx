import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import Menu from './components/menu';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={routes} />
    <Footer />
  </React.StrictMode>,
);
