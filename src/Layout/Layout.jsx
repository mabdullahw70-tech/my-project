import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showLoader = setTimeout(() => {
      setLoading(true); 
    }, 100);

    const hideLoader = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(showLoader);
      clearTimeout(hideLoader);
    };
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Outlet />
    </>
  );
}
