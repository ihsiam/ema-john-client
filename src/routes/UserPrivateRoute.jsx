import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function UserPrivateRoute({ children }) {
  const { isAuth, user } = useSelector((state) => state.User);
  return isAuth && user.role === "user" ? children : <Navigate to="/log-in" />;
}

UserPrivateRoute.propTypes = {
  children: PropTypes.node,
};
