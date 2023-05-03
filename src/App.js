
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout";
import Loader from "./Components/Loader";
import routes from "./routes";


function App() {

  const user = useSelector(state => state.auth.user);
  const showRoutes = useRoutes(routes);
  const [redicaret, setRedicaret] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setRedicaret(true)
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])


  if (!user && !redicaret) {
    return <Loader />
  }



  return (
    <>
      {showRoutes}
      <Toaster position="top-right" />
      <Layout />
    </>
  );
}

export default App;