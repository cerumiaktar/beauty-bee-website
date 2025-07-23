import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

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
      }
    ]
  },
]);

export default router;