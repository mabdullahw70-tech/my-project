import CommonHero from "../components/CommonHero";
import Slider1 from "../components/Slider1";
import ProductDetail from "../components/PrdoctDetail"
import Aboutheroimg8 from "../assets/Aboutheroimg8.jpg";
export default function SingleProduct() {
  return (
    <div>
      <CommonHero intro="SEE MORE DETAILS" mainheading="Single Product" bgImage={Aboutheroimg8} />
        <ProductDetail/>
      <Slider1 />
    </div>
  );
}
