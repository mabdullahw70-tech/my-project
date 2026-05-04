import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Newsingle from "./pages/Newsingle";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout"; // 👈 add this


export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/single-news" element={<Newsingle />} />
          {/* <Route path="/pages" element={<Pages />} /> */}
          <Route path="/news" element={<News />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}
