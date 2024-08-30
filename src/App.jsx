import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./app/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const { loading, user, error, isAuth } = useSelector((state) => state.User);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  console.log(error);
  console.log(user);
  console.log(isAuth);
  console.log(loading);
  return (
    <div>
      <h1>app</h1>
    </div>
  );
}

export default App;
