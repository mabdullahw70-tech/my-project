import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;

    setLoading(true);

    timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Outlet />
    </>
  );
}
