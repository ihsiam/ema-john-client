import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Activation from "../components/others/Activation";
import Login from "../components/others/Login";
import Signup from "../components/others/Signup";
import Address from "../components/userProfile/Address";
import ChangePassword from "../components/userProfile/ChangePassword";
import Inbox from "../components/userProfile/Inbox";
import Order from "../components/userProfile/Order";
import Profile from "../components/userProfile/Profile";
import Refunds from "../components/userProfile/Refunds";
import TrackOrder from "../components/userProfile/TrackOrder";
import BecomeSeller from "../pages/BecomeSeller";
import BestSelling from "../pages/BestSelling";
import EventPage from "../pages/EventPage";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import ProfilePage from "../pages/ProfilePage";
import SellerLogIn from "../pages/SellerLogIn";
import UserPrivateRoute from "./UserPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/best-selling",
        element: <BestSelling />,
      },
      {
        path: "/events",
        element: <EventPage />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/user",
        element: (
          <UserPrivateRoute>
            <ProfilePage />
          </UserPrivateRoute>
        ),
        children: [
          {
            path: "/user/profile",
            element: <Profile />,
          },
          {
            path: "/user/order",
            element: <Order />,
          },
          {
            path: "/user/refunds",
            element: <Refunds />,
          },
          {
            path: "/user/inbox",
            element: <Inbox />,
          },
          {
            path: "/user/track-order",
            element: <TrackOrder />,
          },
          {
            path: "/user/changePassword",
            element: <ChangePassword />,
          },
          {
            path: "/user/address",
            element: <Address />,
          },
        ],
      },
    ],
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/user/activation/:token",
    element: <Activation role="user" />,
  },
  {
    path: "/shop/activation/:token",
    element: <Activation role="shop" />,
  },
  {
    path: "/seller/create-shop",
    element: <BecomeSeller />,
  },
  {
    path: "/seller/log-in",
    element: <SellerLogIn />,
  },
]);

export default router;
