export default function Wishlist() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-10">Wishlist</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-3xl p-6"
          >
            <div className="h-52 rounded-2xl bg-white/10 mb-6"></div>

            <h2 className="text-2xl font-bold mb-3">Fresh Strawberry</h2>

            <button className="bg-orange-500 px-6 py-3 rounded-2xl hover:bg-orange-600 transition">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
