import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import NewsLayouts from "../Layouts/NewsLayouts";
import Category from "../Pages/Home/Category/Category";
import News from "../Pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Category/>,
        loader: () => fetch('http://localhost:5000/news')
      },
      {
        path: "/category/:id",
        element: <Category/>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ],
  },
  {
    path: "news",
    element: <NewsLayouts/>,
    children: [
      {
        path: ":id",
        element: <News/>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

export default router;
