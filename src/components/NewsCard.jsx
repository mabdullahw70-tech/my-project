import { FaUser, FaCalendarAlt } from "react-icons/fa";
import Container from "./Container";

export default function NewsCard({ heading, info, bottomline, news ,btn }) {
  return (
    <Container>
      <div className="py-16 flex flex-col items-center">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-gray-900">{heading}</h2>
          {bottomline}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {info}
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-0 sm:px-4 md:px-8">
          {news.map((n) => (
            <div
              key={n.id}
              className="w-full shadow rounded-lg overflow-hidden hover:shadow-xl transition duration-300 bg-white"
            >
              {/* Image */}
              <img
                src={n.img}
                alt={n.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5 text-left">
                {/* Title */}
                <h3 className="font-bold text-black text-lg leading-snug text-left">
                  {n.title}
                </h3>

                {/* Admin + Date */}
                <div className="flex items-center text-gray-500 text-xs sm:text-sm gap-4 mt-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-gray-400" />
                    <span>Admin</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400" />
                    <span>27 December, 2019</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-3 leading-relaxed text-left">
                  {n.desc}
                </p>

                {/* Read More */}
                <a className="inline-flex items-center mt-4 text-[#f97316] text-sm font-medium cursor-pointer group">
                  Read more
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                    &gt;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        
          {btn}
        
      </div>
    </Container>
  );
}
