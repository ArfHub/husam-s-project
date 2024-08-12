// #1f285d
// #FFFFFF
// #6d6e70
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import Signin from './pages/Signin';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Signin',
    element: <Signin />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
