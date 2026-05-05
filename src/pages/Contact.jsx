import Navbar from "../components/Navbar";
import CommonHero from "../components/CommonHero";
import Footer from "../components/Footer";
import ContactDetail from "../components/ContactDetail";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <CommonHero intro="Get 24/7 Support" mainheading="Contact Us" />
      <ContactDetail/>
      <Footer />
    </div>
  );
}
