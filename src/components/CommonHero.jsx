export default function CommonHero({ intro, mainheading, bgImage }) {
  return (
    <section
      className="bg-[#364955] h-[80vh] flex items-center justify-center pt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})
        `,
      }}
    >
      <div className="text-center">
        <p className="text-2xl text-orange-500  font-bold tracking-[6px] uppercase">
          {intro}
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-4">
          {mainheading}
        </h1>
      </div>
    </section>
  );
}
