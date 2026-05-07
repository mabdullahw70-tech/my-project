import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoader = setTimeout(() => {
      setLoading(true);
    }, 0);

    const stopLoader = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(startLoader);
      clearTimeout(stopLoader);
    };
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
