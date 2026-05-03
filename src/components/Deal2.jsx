import Container from "./Container"

export default function Deal2() {
  return (
    <div className=" bg-gray-100 ">
    <Container>
    <div className="relative w-full overflow-hidden flex items-center min-h-[200px] sm:min-h-[260px] md:min-h-[300px]">
      {/* Left Text Content */}
      <div className="relative z-10 w-[55%] sm:w-[60%] px-8 sm:px-8 md:px-9 py-8 sm:py-12">
        {/* Headline */}
        <h1 className="font-extrabold leading-tight text-[#1a2332] text-2xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
          December sale is on!
          <br />
          with big <span className="text-orange-500">Discount...</span>
        </h1>

        {/* Sale Label + Percentage */}
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

        {/* Shop Now Button */}
        <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full">
          Shop Now
        </button>
      </div>

      {/* Right Side — Strawberry Images */}
      <div className="absolute right-0 top-0 w-[45%] sm:w-[42%] h-full pointer-events-none">
        {/* Big Strawberry — top right, slightly cut off at top */}
        <img
          src="src/assets/deal2image.png"
          alt="strawberry"
          className="absolute object-cover"
          style={{
            width: "clamp(130px, 22vw, 280px)",
            height: "clamp(160px, 28vw, 340px)",
            top: "-8%",
            right: "-4%",
            borderRadius: "50% 50% 45% 45%",
            objectPosition: "center",
          }}
        />

        {/* Small Strawberry — bottom right, half visible */}
        <img
          src="src/assets/deal2image.png"
          alt="strawberry"
          className="absolute object-cover"
          style={{
            width: "clamp(70px, 12vw, 150px)",
            height: "clamp(80px, 14vw, 170px)",
            bottom: "-10%",
            right: "2%",
            borderRadius: "50% 50% 45% 45%",
            objectPosition: "center top",
          }}
        />
      </div>
    </div>
    </Container>
    </div>
  );
}
