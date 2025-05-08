import { createBrowserRouter, Navigate } from "react-router-dom";
import LogInLayout from "../Layouts/LogInLayout";
import Main from "../Layouts/Main";
import NewsLayouts from "../Layouts/NewsLayouts";
import Category from "../Pages/Home/Category/Category";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";
import News from "../Pages/News/News";
import Terms from "../Pages/Shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayouts />,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
