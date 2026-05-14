export default function CommonHero({ intro, mainheading, bgImage }) {
  return (
    <section
      className="relative bg-[#364955] h-[80vh] flex items-center justify-center pt-16 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="text-2xl text-orange-500 font-bold tracking-[6px] uppercase">
          {intro}
        </p>

        <h1 className="text-white text-4xl md:text-6xl font-bold mt-4">
          {mainheading}
        </h1>
      </div>
    </section>
  );
}
