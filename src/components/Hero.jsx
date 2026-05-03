import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Button from "./Button";

import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mx-auto relative">

      {/* Navigation Buttons */}
      <div className="swiper-button-prev !left-5"></div>
      <div className="swiper-button-next !right-5"></div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = ".swiper-button-next";
          swiper.params.navigation.prevEl = ".swiper-button-prev";
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1}
      >

        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="src/assets/image1.png"
              className="w-full h-screen object-cover"
            />

            <div
              className={`absolute inset-0 z-10 flex flex-col items-center justify-center max-w-7xl mx-auto px-8 text-center ${
                activeIndex === 0 ? "animate-fade-up" : ""
              }`}
            >
              <p className="text-2xl text-orange-500 font-bold">
                FRESH EVERYDAY
              </p>

              <h1 className="text-5xl text-white my-3">
                100% Organic Collection
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                <Button className="w-full sm:w-auto">Visit Shop</Button>
                <Button outline className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="absolute inset-0 z-0 bg-black/50"></div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="src/assets/image2.png"
              className="w-full h-screen object-cover"
            />

            <div
              className={`absolute inset-0 z-10 flex flex-col items-center lg:items-end justify-center max-w-7xl mx-auto px-8 text-center lg:text-right ${
                activeIndex === 1 ? "animate-fade-up" : ""
              }`}
            >
              <p className="text-2xl text-orange-500 font-bold">
                MEGA SALE GOING ON
              </p>

              <h1 className="text-5xl text-white my-3">
                Get April Discount
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                <Button className="w-full sm:w-auto">Visit Shop</Button>
                <Button outline className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="absolute inset-0 z-0 bg-black/50"></div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="src/assets/image3.png"
              className="w-full h-screen object-cover"
            />

            <div
              className={`absolute inset-0 z-10 flex flex-col items-center lg:items-start justify-center max-w-7xl mx-auto px-8 text-center lg:text-left ${
                activeIndex === 2 ? "animate-fade-up" : ""
              }`}
            >
              <p className="text-2xl text-orange-500 font-bold">
                FRESH & ORGANIC
              </p>

              <h1 className="text-5xl text-white my-3">
                Delicious Seasonal Fruits
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                <Button className="w-full sm:w-auto">Visit Shop</Button>
                <Button outline className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="absolute inset-0 z-0 bg-black/50"></div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}