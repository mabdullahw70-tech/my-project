import img1 from "../assets/sliderimage1.png";
import img2 from "../assets/sliderimage2.png";
import img3 from "../assets/sliderimage3.png";
export function Comments() {
  const commentsData = [
    {
      name: "Jenny Joe",
      img: img1,
    },
    {
      name: "Simon Seo",
      img: img2,
    },
    {
      name: "Addy Aoe",
      img: img3,
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">3 Comments</h3>

      <div className="space-y-14">
        {commentsData.map((item, i) => (
          <div key={i} className={`flex gap-4 ${i === 1 ? "md:ml-10" : ""}`}>
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <h4 className="font-semibold text-black">{item.name}</h4>

                <span className="text-gray-400">April 20, 2020</span>

                <button className="text-xs text-black hover:text-orange-500 transition">
                  reply
                </button>
              </div>

              <p className="text-gray-600 text-sm mt-1">
                Nunc risus ex, tempus quis purus ac, tempor consequat ex.
                Vivamus sem magna, maximus at est id, maximus aliquet nunc.
                Suspendisse lacinia velit a eros porttitor, in interdum ante
                faucibus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
