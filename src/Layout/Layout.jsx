import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showLoader = setTimeout(() => {
      setLoading(true); 
    }, 50);

    const hideLoader = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(showLoader);
      clearTimeout(hideLoader);
    };
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
