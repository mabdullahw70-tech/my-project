import Button from "./Button";
import Container from "./Container";
import dealImg from "../assets/dealofmonth.jpg";

export default function Deal() {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="grid md:grid-cols-2 items-center py-16 gap-8">
          {/* Image Section */}
          <div className="relative">
            <img src={dealImg} className="w-full rounded-lg" />

            <div className="absolute top-4 left-4 rounded-full border-8 border-orange-300 bg-orange-500 w-28 h-28 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold text-white">30%</h2>
              <p className="text-white text-sm">off per kg</p>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl text-[#1a202c] font-bold mb-4">
              <span className="text-orange-500">Deal</span> of the month
            </h2>

            <h3 className="text-xl text-[#1a202c] font-semibold mb-4">
              Strawberry at special price
            </h3>

            {/* Timer */}
            <div className="flex gap-4 mb-6 flex-wrap">
              {[
                { num: "00", time: "Days" },
                { num: "00", time: "Hours" },
                { num: "00", time: "Mins" },
                { num: "00", time: "Secs" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="border-2 border-orange-500 w-16 p-2 text-center rounded"
                >
                  <div className="text-2xl text-orange-500 font-bold">
                    {t.num}
                  </div>
                  <div className="text-xs uppercase">{t.time}</div>
                </div>
              ))}
            </div>

            <Button>Add to Cart</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
