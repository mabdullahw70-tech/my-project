import { useState } from "react";
import Navbar from "../components/Navbar";
import CommonHero from "../components/CommonHero";
import Sectioncheck from "../components/Sectioncheck";
import Formcheck from "../components/Formcheck";
import OrdersummaryCheck from "../components/Ordersummarycheck";
import Slider1 from "../components/Slider1";
import Footer from "../components/Footer";
import Aboutheroimg6 from "../assets/Aboutheroimg6.jpg";
export default function Checkout() {
  const [openSection, setOpenSection] = useState("billing");

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <Navbar />
      <CommonHero intro="Fresh and Organic" mainheading="Check Out Product" bgImage={Aboutheroimg6} />

      <div className="bg-gray-300 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-5">
            {/* Billing */}
            <Sectioncheck
              title="Billing Address"
              isOpen={openSection === "billing"}
              onClick={() => toggle("billing")}
            >
              <Formcheck type="billing" />
            </Sectioncheck>

            {/* Shipping */}
            <Sectioncheck
              title="Shipping Address"
              isOpen={openSection === "shipping"}
              onClick={() => toggle("shipping")}
            >
              <Formcheck />
            </Sectioncheck>

            {/* Card */}
            <Sectioncheck
              title="Card Details"
              isOpen={openSection === "card"}
              onClick={() => toggle("card")}
            >
              <div className="space-y-4">
                <input className="input" placeholder="Card Number" />
                <input className="input" placeholder="Expiry Date" />
                <input className="input" placeholder="CVV" />
              </div>
            </Sectioncheck>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-1 w-full">
            <div className="lg:sticky lg:top-10 w-full">
              <OrdersummaryCheck />
            </div>
          </div>
        </div>
      </div>
      <Slider1 />
      <Footer />
    </>
  );
}
