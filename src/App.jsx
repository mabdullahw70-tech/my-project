import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Deal from "./components/Deal";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Banner from "./components/Banner";
import News from "./components/News";
import Footer from "./components/Footer";
import Slider1 from "./components/Slider1";
import Slider from "./components/Slider";





export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Deal />
      <Slider/>
      <Slider1/>
      
      {/* <Testimonial />
      <About />
      <Banner />
      <News /> */}
      <Footer /> 
    </>
  );
}



