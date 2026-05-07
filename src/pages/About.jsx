
import CommonHero from "../components/CommonHero";
import Deal2 from "../components/Deal2";
import Ourteam from "../components/Ourteam";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";
import Why from "../components/Why";
import Aboutheroimg4 from "../assets/Aboutheroimg4.jpg";

export default function About() {
  return (
    <div>
      <CommonHero
        intro="WE SALE FRESH FRUITS"
        mainheading="About Us"
        bgImage={Aboutheroimg4}
      />
      <Why />
      <Deal2 />
      <Ourteam />
      <Slider />
      <Slider1 />
    </div>
  );
}
