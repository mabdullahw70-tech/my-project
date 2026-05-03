import Container from "./Container";
import dealImg from "../assets/deal2image.png";

export default function Deal2() {
  return (
    <div
      className=" bg-no-repeat"
      style={{
        backgroundImage: `url(${dealImg})`,
        backgroundPosition: "right center",
        backgroundSize: "contain",
      }}
    >
      <Container>
        <div className="flex items-center min-h-[220px] sm:min-h-[280px] md:min-h-[340px]">
          {/* Left Text Content */}
          <div className="w-[55%] sm:w-[60%] px-8 sm:px-8 md:px-9 py-8 sm:py-12">
            <h1 className="font-extrabold leading-tight text-[#1a2332] text-2xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
              December sale is on!
              <br />
              with big <span className="text-orange-500">Discount...</span>
            </h1>

            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <p className="text-[11px] sm:text-sm text-gray-500 leading-tight">
                Sale!
                <br />
                Upto
              </p>

              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a2332]">
                50%
              </span>

              <span className="text-sm sm:text-base text-gray-500 font-medium">
                off
              </span>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
