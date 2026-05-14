import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, } from "swiper/modules";

export default function Slider() {
  return (
    <section className="bg-gray-50 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Autoplay, ]}
          autoplay={{ delay: 3000 }}
          
          loop={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img
              src="src/assets/sliderimage1.png"
              className="w-28 h-28 mx-auto rounded-full mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Jacob Sikim
            </h2>
            <p className="text-gray-500 mb-6">Local shop owner</p>
            <p className="text-gray-400 italic mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              provident consequatur temporibus ipsum cumque delectus praesentium
              eius mollitia corrupti recusandae quia fugiat, aliquid sunt. Ea
              repudiandae itaque magni vel saepe!
            </p>
            <div className="flex justify-center mt-6">
              <FaQuoteRight className="text-5xl text-gray-300" />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <img
              src="src/assets/sliderimage2.png"
              className="w-28 h-28 mx-auto rounded-full mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h2>
            <p className="text-gray-500 mb-6">Farmer</p>
            <p className="text-gray-400 italic mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facere incidunt tempora consequatur rem nostrum voluptatibus
              fugiat cumque velit, deserunt sequi aperiam porro necessitatibus
              maiores ratione ipsa. Ut, officia aperiam.
            </p>
            <div className="flex justify-center mt-6">
              <FaQuoteRight className="text-5xl text-gray-300" />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <img
              src="src/assets/sliderimage3.png"
              className="w-28 h-28 mx-auto rounded-full mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Alex Smith
            </h2>
            <p className="text-gray-500 mb-6">Gardener</p>
            <p className="text-gray-400 italic mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              non eveniet nostrum ipsum, voluptas delectus itaque deserunt,
              officiis minima tenetur facilis maxime molestiae quasi rerum.
              Reprehenderit mollitia ipsa exercitationem soluta.
            </p>
            <div className="flex justify-center mt-6">
              <FaQuoteRight className="text-5xl text-gray-300" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}