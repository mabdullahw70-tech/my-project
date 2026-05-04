import CommonHero from '../components/CommonHero'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import PagePagination from '../components/PagePagination';
import ShopProduct from '../components/ShopProduct';
import Slider1 from '../components/Slider1';

export default function Shop() {
  return (
    <>
      <Navbar />
      <CommonHero intro="Fresh and Organic" mainheading="Shop" />
      <ShopProduct/>
      <PagePagination/>
      <Slider1/>
      <Footer/>
    </>
  );
}
