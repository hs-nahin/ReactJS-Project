import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory.jsx';
import Home from './components/Layout/Home.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import Orders from './components/Orders/Orders.jsx';
import Shop from './components/Shop/Shop.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <Shop/>,
      },
      {
        path: "order-review",
        element: <Orders/>,
      },
      {
        path: "inventory",
        element: <Inventory/>,
      },
      {
        path: "log-in",
        element: <LogIn/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);