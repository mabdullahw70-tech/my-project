import Deal from "../components/Deal";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";
import AboutHistory from "../components/AboutHistory";
import Deal2 from "../components/Deal2";
import NewsCard from "../components/NewsCard";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Deal />
      <Slider />
      <AboutHistory/>
      <Deal2/>
      <NewsCard/>
      <Slider1 />
      <Footer /> 
    </>
  );
}
