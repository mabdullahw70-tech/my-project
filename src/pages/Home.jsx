import Deal from "../components/Deal";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import News from "../components/News"
import Slider1 from "../components/Slider1";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Deal />
      <Slider />
      <News/>
      <Slider1 />
      <Footer /> 
    </>
  );
}
