import CommonHero from "../components/CommonHero";
import Slider1 from "../components/Slider1";
import CartTable from "../components/CartTable";
import Aboutheroimg7 from "../assets/Aboutheroimg7.jpg";

export default function Cart() {
  return (
    <div>
      <CommonHero intro="FRESH AND ORGANIC" mainheading="Cart" bgImage={Aboutheroimg7} />
      <CartTable />
      <Slider1 />
    </div>
  );
}
