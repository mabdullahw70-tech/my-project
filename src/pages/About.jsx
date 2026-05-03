import Abouthero from "../components/Abouthero";
import Deal2 from "../components/Deal2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ourteam from "../components/Ourteam";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";
import Why from "../components/Why";

export default function About() {
  return (
    <div>
      <Navbar />
      <Abouthero />
      <Why />
      <Deal2 />
      <Ourteam />
      <Slider />
      <Slider1 />
      <Footer />
    </div>
  );
}
