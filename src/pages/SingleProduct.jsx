import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider1 from "../components/Slider1";
import ProductDetail from "../components/PrdoctDetail"

export default function SingleProduct() {
  return (
    <div>
      <Navbar />
      <CommonHero intro="SEE MORE DETAILS" mainheading="Single Product" />
        <ProductDetail/>
      <Slider1 />
      <Footer />
    </div>
  );
}
