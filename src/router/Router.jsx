import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/allProducts",
        element:<AllProducts></AllProducts>
      },
      {
        path:"/product/:id",
        element:<ProductDetails></ProductDetails>,
        loader: async () =>{
          const res = await fetch('/products.json')
          return res.json();
        }
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
  },
]);

export default router;