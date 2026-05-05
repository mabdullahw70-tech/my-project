import { FaTruck, FaDollarSign, FaBoxOpen, FaUndo } from "react-icons/fa";
export default function Why() {
  return (
    <section className="py-24 px-9 md:px-9 lg:px-15 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why <span className="text-orange-500">Fruitkha</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Box 1 */}
            <div className="flex gap-4">
              <div className="w-14 h-14 aspect-square flex items-center justify-center border-2 border-dotted border-orange-500 rounded-full text-orange-500 text-xl">
                <FaTruck />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Home Delivery</h3>
                <p className="text-gray-500 text-sm mt-1">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex gap-4">
              <div className="w-14 h-14 aspect-square flex items-center justify-center border-2 border-dotted border-orange-500 rounded-full text-orange-500 text-xl">
                <FaDollarSign />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Best Price</h3>
                <p className="text-gray-500 text-sm mt-1">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex gap-4">
              <div className="w-14 h-14 aspect-square flex items-center justify-center border-2 border-dotted border-orange-500 rounded-full text-orange-500 text-xl">
                <FaBoxOpen />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Custom Box</h3>
                <p className="text-gray-500 text-sm mt-1">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex gap-4">
              <div className="w-14 h-14 aspect-square flex items-center justify-center border-2 border-dotted border-orange-500 rounded-full text-orange-500 text-xl">
                <FaUndo />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Quick Refund</h3>
                <p className="text-gray-500 text-sm mt-1">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end h-full">
          <img
            src="src/assets/whyimageabout.png"
            alt="fruits"
            className="rounded-lg shadow-lg w-full max-w-md h-full lg:max-w-4xl lg:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
