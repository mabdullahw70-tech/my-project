import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Newsingle from "./pages/Newsingle";
import News from "./pages/News";
import Cart from "./pages/Cart";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/single-news" element={<Newsingle />} />
        {/* <Route path="/pages" element={<Pages />} /> */}
        <Route path="/news" element={<News />} />
        {/*<Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
