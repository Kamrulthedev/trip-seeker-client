import { createBrowserRouter } from "react-router-dom";
import Product from "../components/products/product/Product";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import HomePage from "../pages/HomePage";
import ManageProduct from "../pages/ManageProduct";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/manage-product",
        element: <ManageProduct />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
