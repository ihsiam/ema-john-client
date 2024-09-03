import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchUser } from "./app/actions/userAction";
import Header from "./components/home/Header";

function App() {
  const dispatch = useDispatch();
  const { loading, user, error, isAuth } = useSelector((state) => state.User);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  console.log(loading, user, error, isAuth);

  return (
    <div>
      <Header activeHeading={1} />
      <Outlet />
    </div>
  );
}

export default App;
