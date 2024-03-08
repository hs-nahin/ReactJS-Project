import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: '/statistics',
        element: <Statistics/>,
      },
      {
        path: '/jobs',
        element: <AppliedJob/>,
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
