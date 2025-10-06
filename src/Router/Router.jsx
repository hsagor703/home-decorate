import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement:"Loading...",
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishList",
        Component: WishList,
      },
      {
        path: '/productDetails/:id',
        Component : ProductDetails,
      },
    ],
  },
]);

export default router;
