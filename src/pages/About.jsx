
import CommonHero from "../components/CommonHero";
import Deal2 from "../components/Deal2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ourteam from "../components/Ourteam";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";
import Why from "../components/Why";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <CommonHero intro="WE SALE FRESH FRUITS" mainheading="About Us" />
      <Why />
      <Deal2 />
      <Ourteam />
      <Slider />
      <Slider1 />
      <Footer />
    </div>
  );
}
