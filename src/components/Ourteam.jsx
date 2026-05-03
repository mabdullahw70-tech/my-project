
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Ourteam() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Our <span className="text-[#f97316]">Team</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#f97316] mx-auto mt-3 mb-6"></div>

        <p className="text-gray-500 text-center  text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas <br /> itaque eveniet beatae optio.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="src/assets/whyimageabout.png"
            alt="team"
            className="w-full h-[360px] object-cover"
          />
          <div className="namediv text-center mb-2">
            <h2 className="font-bold text-black text-lg">Jimmy Doe</h2>
            <p className="text-gray-500">Farmer</p>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 text-white">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c]  hover:text-orange-500 rounded-full">
              <FaFacebookF size={14} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c]  hover:text-orange-500 rounded-full">
              <FaTwitter size={14} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c]  hover:text-orange-500 rounded-full">
              <FaInstagram size={14} />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="src/assets/whyimageabout1.png"
            alt="team"
            className="w-full h-[360px] object-cover"
          />
          <div className="namediv text-center">
            <h2 className="font-bold text-black text-lg">Marry Doe</h2>
            <p className="text-gray-500">Farmer</p>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 text-white">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c]  hover:text-orange-500 rounded-full">
              <FaFacebookF size={14}  hover:text-orange-500/>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c] hover:text-orange-500 rounded-full">
              <FaTwitter size={14} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c] hover:text-orange-500 rounded-full">
              <FaInstagram size={14} />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="src/assets/whyimageabout2.png"
            alt="team"
            className="w-full h-[360px] object-cover"
          />
          <div className="namediv text-center">
            <h2 className="font-bold text-black text-lg">Simon Joe</h2>
            <p className="text-gray-500">Farmer</p>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 text-white">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c] hover:text-orange-500 rounded-full">
              <FaFacebookF size={14} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c] hover:text-orange-500 rounded-full">
              <FaTwitter size={14} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#f97316] hover:bg-[#1a202c] hover:text-orange-500 rounded-full">
              <FaInstagram size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
