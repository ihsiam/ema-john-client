import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchUser } from "./app/actions/userAction";
import Header from "./components/home/Header";
import Footer from "./components/others/Footer";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.User);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
