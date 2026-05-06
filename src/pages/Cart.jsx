import Navbar from "../components/Navbar";
import CommonHero from "../components/CommonHero";
import Slider1 from "../components/Slider1";
import Footer from "../components/Footer";
import CartTable from "../components/CartTable";
import Aboutheroimg7 from "../assets/Aboutheroimg7.jpg";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <CommonHero intro="FRESH AND ORGANIC" mainheading="Cart" bgImage={Aboutheroimg7} />
      <CartTable />
      <Slider1 />
      <Footer />
    </div>
  );
}
