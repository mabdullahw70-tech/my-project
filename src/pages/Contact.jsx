import Navbar from "../components/Navbar";
import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import ContactDetail from "../components/ContactDetail";
import ContactLocation from "../components/ContactLocation";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <CommonHero intro="Get 24/7 Support" mainheading="Contact Us" />
      <ContactDetail/>
      <ContactLocation/>
      <Footer />
    </div>
  );
}
