import CommonHero from '../components/CommonHero'
import PagePagination from '../components/PagePagination';
import ShopProduct from '../components/ShopProduct';
import Slider1 from '../components/Slider1';
import Aboutheroimg5 from "../assets/Aboutheroimg5.jpg";

export default function Shop() {
  return (
    <>
      <CommonHero intro="Fresh and Organic" mainheading="Shop"  bgImage={Aboutheroimg5}  />
      <ShopProduct/>
      <PagePagination/>
      <Slider1/>
    </>
  );
}
