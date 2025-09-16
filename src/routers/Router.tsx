import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import HomePage from "../pages/HomePage";
import Contact from "../components/contact/Contact";
import Discover from "../components/discover/Discover";
import Services from "../pages/Services";
import OrderConfrom from "../pages/OrderConfrom";

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
        path: "/discover",
        element:<Discover/>
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
  {
    path: "/order-confrom",
    element: <OrderConfrom></OrderConfrom>
  }
]);

export default router;
