import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Products({ products, showFilter = false }) {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(
          (item) => item.category.toLowerCase().trim() === filter,
        );
  return (
    <Container>
      <div className="py-16 text-center ">
        <h2 className="text-[#1a202c] text-3xl font-bold">
          <span className="text-orange-500">Our</span> Product
        </h2>

        {/* ✅ Filter Buttons (sirf shop page me show hon) */}
        {showFilter && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-4 mt-6">
            {["all", "strawberry", "berry", "lemon", "avocado", "apple"].map(
              (btn) => {
                const value = btn.toLowerCase();

                return (
                  <button
                    key={value}
                    onClick={() => setFilter(value)}
                    className={`px-3 py-2 rounded-full border-2 border-black text-sm whitespace-normal break-words inline-block text-center transition
                  ${filter === value ? "bg-orange-500 text-white" : "bg-white"}`}
                  >
                    {btn.charAt(0).toUpperCase() + btn.slice(1)}
                  </button>
                );
              },
            )}
          </div>
        )}

        {/* ✅ SAME GRID (tumhara original design) */}
        <div key={filter} className="grid md:grid-cols-3 gap-8 mt-24">
          {filteredProducts.map((p, index) => (
            <motion.div
              key={p.name + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm rounded-lg hover:scale-105 shadow-md hover:shadow-2xl transition"
            >
              <img src={p.img} className="mx-auto  h-auto" alt={p.name} />
              <h1 className="mt-8 text-2xl font-bold">{p.name}</h1>
              <p className="mt-3 mb-4 text-xl font-semibold">${p.price}</p>
              <Button>Add to Cart</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
