import CommonHero from "../components/CommonHero";
import NotFound from "../components/NotFound";
import Slider1 from "../components/Slider1";
import Aboutheroimg9 from "../assets/Aboutheroimg9.jpg";

export default function Page404() {
  return (
    <div>
      <CommonHero intro="FRESH AND ORGANIC" mainheading="404 - Not Found"bgImage={Aboutheroimg9}  />
      <NotFound />
      <Slider1 />
    </div>
  );
}
