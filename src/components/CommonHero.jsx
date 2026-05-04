export default function CommonHero({intro , mainheading}) {
  return (
    <section className="bg-[#364955] h-[80vh] flex items-center justify-center pt-16">
      <div className="text-center">
        <p className="text-orange-500 tracking-[6px] uppercase text-sm md:text-base">
          {intro}
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-4">
          {mainheading}
        </h1>
      </div>
    </section>
  );
}
