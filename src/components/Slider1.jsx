import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Slider1() {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 }, // tablet
            1024: { slidesPerView: 4, spaceBetween: 50 }, // laptop
          }}
        >
          {/* Logo 1 */}
          <SwiperSlide>
            <img
              src="/src/assets/sliderlogo1.png"
              className="mx-auto w-28 md:w-32 lg:w-36 opacity-60 hover:opacity-100 transition duration-300"
              alt="logo"
            />
          </SwiperSlide>

          {/* Logo 2 */}
          <SwiperSlide>
            <img
              src="/src/assets/sliderlogo2.png"
              className="mx-auto w-28 md:w-32 lg:w-36 opacity-60 hover:opacity-100 transition duration-300"
              alt="logo"
            />
          </SwiperSlide>

          {/* Logo 3 */}
          <SwiperSlide>
            <img
              src="/src/assets/sliderlogo3.png"
              className="mx-auto w-28 md:w-32 lg:w-36 opacity-60 hover:opacity-100 transition duration-300"
              alt="logo"
            />
          </SwiperSlide>

          {/* Logo 4 */}
          <SwiperSlide>
            <img
              src="/src/assets/sliderlogo4.png"
              className="mx-auto w-28 md:w-32 lg:w-36 opacity-60 hover:opacity-100 transition duration-300"
              alt="logo"
            />
          </SwiperSlide>

          {/* Duplicate for smooth loop */}
          <SwiperSlide>
            <img
              src="/src/assets/sliderlogo1.png"
              className="mx-auto w-28 md:w-32 lg:w-36 opacity-60 hover:opacity-100 transition duration-300"
              alt="logo"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/sliderlogo2.png"
              className="mx-auto w-28 md:w-32 lg:w-36 opacity-60 hover:opacity-100 transition duration-300"
              alt="logo"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}