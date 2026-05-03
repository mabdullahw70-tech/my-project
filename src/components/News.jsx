import { FaUser, FaCalendarAlt } from "react-icons/fa";
 import Button from "./Button";
import Container from "./Container";


const news = [
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

export default function News() {
  return (
    <Container>
      <div className="py-16 flex items-center flex-col">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#f97316]">News</span>
          </h2>
          <div className="w-16 h-[3px] bg-[#f97316] mx-auto mt-3 mb-6"></div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
            nisi. Praesent vitae mattis nunc, egestas viverra eros.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          {news.map((n) => (
            <div
              key={n.id}
              className="shadow rounded-lg overflow-hidden hover:shadow-xl transition duration-300 bg-white"
            >
              <img
                src={n.img}
                alt={n.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                {/* Title */}
                <h3 className="font-bold text-black text-lg leading-snug">
                  {n.title}
                </h3>

                {/* Admin + Date */}
                <div className="flex items-center text-gray-500 text-sm gap-4 mt-3">
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
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
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
        <div className="mt-20">
          <Button>More News</Button>
        </div>
      </div>
    </Container>
  );
}
