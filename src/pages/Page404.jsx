import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import Slider1 from "../components/Slider1";

export default function Page404() {
  return (
    <div>
      <Navbar />
      <CommonHero intro="FRESH AND ORGANIC" mainheading="404 - Not Found" />
      <NotFound />
      <Slider1 />
      <Footer />
    </div>
  );
}
