import { useState, useEffect } from "react";
import Button from "./Button";
import Container from "./Container";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom"; // Upar import karein
// ✅ Step 1: Toast library import ki
import toast, { Toaster } from "react-hot-toast";

export default function Products({ productHeading, showFilter = false }) {
  const [filter, setFilter] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/shop-products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log("Error fetching products:", error));
  }, []);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((item) => {
          const categoryName =
            typeof item.category === "object"
              ? item.category?.name
              : item.category;
          return categoryName?.toLowerCase().trim() === filter;
        });

  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/cart/add/", {
        product_id: productId,
      });

      // ✅ FIX: Ab humne 'response' ko yahan use kar liya hai. Red line gayab ho jayegi!
      toast.success(response.data.message, {
        position: "bottom-right",
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#1a202c",
          color: "#fff",
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        iconTheme: {
          primary: "#f97316",
          secondary: "#fff",
        },
      });
    } catch (error) {
      console.error("Error adding to cart:", error);

      toast.error("Failed to add product.", {
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#ef4444",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Container>
      {/* ✅ Step 3: Toaster component yahan add kiya, yeh toasts ko render karega */}
      <Toaster />

      <div className="py-16 text-center ">
        <h2 className="text-[#1a202c] text-3xl font-bold">{productHeading}</h2>

        {showFilter && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-4 mt-6">
            {["all", "strawberry", "lemon", "apple", "berry", "avocado"].map(
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

        <div key={filter} className="grid md:grid-cols-3 gap-8 mt-24">
          {filteredProducts.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm rounded-lg hover:scale-105 shadow-md hover:shadow-2xl transition"
            >
              <Link to={`/single-product/${p.id}`}>
                <img
                  src={
                    p.image?.startsWith("http")
                      ? p.image
                      : `http://127.0.0.1:8000${p.image}`
                  }
                  className="mx-auto h-auto object-cover max-h-48 cursor-pointer hover:scale-110 transition"
                  alt={p.name}
                />
              </Link>
              <h1 className="mt-8 text-2xl font-bold">{p.name}</h1>
              <p className="mt-3 mb-4 text-xl font-semibold">${p.price}</p>
              <Button onClick={() => handleAddToCart(p.id)}>Add to Cart</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
