import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import WishList from "../Pages/WishList";

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
        loader: () => fetch('furnitureData.json')
      },
      {
        path: "/products",
        Component: Products,
        loader: () => fetch('furnitureData.json')
      },
      {
        path: "/wishList",
        Component: WishList,
      },
    ],
  },
]);

export default router;
