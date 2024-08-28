import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Activation from "../components/Activation";
import Login from "../components/Login";
import Signup from "../components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
