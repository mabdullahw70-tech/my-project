import CommonHero from "../components/CommonHero";
import ContactDetail from "../components/ContactDetail";
import ContactLocation from "../components/ContactLocation";
import { useEffect } from "react";
import Aboutheroimg from "../assets/Aboutheroimg.jpg";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CommonHero intro="Get 24/7 Support" mainheading="Contact Us" bgImage={Aboutheroimg} />
      <ContactDetail/>
      <ContactLocation/>
    </div>
  );
}
