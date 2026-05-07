import CommonHero from "../components/CommonHero";
import NotFound from "../components/NotFound";
import Slider1 from "../components/Slider1";

export default function Page404() {
  return (
    <div>
      <CommonHero intro="FRESH AND ORGANIC" mainheading="404 - Not Found" />
      <NotFound />
      <Slider1 />
    </div>
  );
}
