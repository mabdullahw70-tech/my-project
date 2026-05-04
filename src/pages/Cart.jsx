import Navbar from "../components/Navbar";
import CommonHero from "../components/CommonHero";
import Slider1 from "../components/Slider1";
import Footer from "../components/Footer";
import CartTable from "../components/CartTable";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <CommonHero intro="FRESH AND ORGANIC" mainheading="Cart" />
      <CartTable />
      <Slider1 />
      <Footer />
    </div>
  );
}
