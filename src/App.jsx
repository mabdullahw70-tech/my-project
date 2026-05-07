import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Newsingle = lazy(() => import("./pages/Newsingle"));
const News = lazy(() => import("./pages/News"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Page404 = lazy(() => import("./pages/Page404"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/single-news" element={<Newsingle />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/single-product" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
