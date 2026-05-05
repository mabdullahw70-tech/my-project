import Deal from "../components/Deal";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";
import AboutHistory from "../components/AboutHistory";
import Deal2 from "../components/Deal2";
import NewsCard from "../components/NewsCard";
import Button from "../components/Button";

export default function Home() {
  // news data
      const smallnews = [
    {
      id: 1,
      img: "src/assets/Newimage1.png",
      title: "You will likely vainly look for fruit for it in autnumn",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 2,
      img: "src/assets/Newimage2.png",
      title: "You will likely vainly look for fruit for it in autnumn",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 3,
      img: "src/assets/Newimage3.png",
      title: "You will likely vainly look for fruit for it in autnumn",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
  ];

  const homeProducts = [
    { name: "Strawberry", price: 85, img: "src/assets/product-img-1.jpg" },
    { name: "Berry", price: 70, img: "src/assets/product-img-2.jpg" },
    { name: "Lemon", price: 35, img: "src/assets/product-img-3.jpg" },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products products={homeProducts} productHeading=<><span className="text-orange-500">Our</span> Product</> />
      <Deal />
      <Slider />
      <AboutHistory />
      <Deal2 />
      <NewsCard
        heading={
          <>
            Our <span className="text-[#f97316]">News</span>
          </>
        }
        info="Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
            nisi. Praesent vitae mattis nunc, egestas viverra eros."
        bottomline={
          <>
            <div className="w-16 h-[3px] bg-[#f97316] mx-auto mt-3 mb-6"></div>
          </>
        }
        news={smallnews}
        btn={
          <>
            <div className="mt-20">
              <Button>More News</Button>
            </div>
          </>
        }
      />
      <Slider1 />
      <Footer />
    </>
  );
}
