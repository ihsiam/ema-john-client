import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Activation from "../components/others/Activation";
import Login from "../components/others/Login";
import Signup from "../components/others/Signup";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    path: "/activation/:token",
    element: <Activation />,
  },
]);

export default router;
