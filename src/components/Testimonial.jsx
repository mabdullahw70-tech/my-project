import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonial() {
  return (
    <div className="w-full  mx-auto py-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true} // buttons
        autoplay={{
          delay: 2500, // 2.5 sec
          disableOnInteraction: false, // keep autoplay even after click
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          
          <div className="bg-white text-black text-center ">

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-blue-400 text-white p-20 text-center text-2xl">
            Slide 2
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-green-400 text-white p-20 text-center text-2xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}