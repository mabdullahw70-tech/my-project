import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";
import Container from "./Container";
import Products from "./Products";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Quantity hamesha "1" se shuru hogi
  const [quantity, setQuantity] = useState("1");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // API se data mangwana
    axios
      .get("http://127.0.0.1:8000/api/shop-products/")
      .then((response) => {
        setAllProducts(response.data);
        const foundProduct = response.data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  // ✅ Related Products Logic
  // ✅ Related Products Logic (Fixed)
  // ✅ Related Products Logic (Fixed for Strawberry and all categories)
  // ✅ Related Products Logic (Ultra-Strict Fix)
  const relatedProducts = allProducts
    .filter((p) => {
      // 1. Agar product same hai, toh usay related mein mat dikhao
      if (!product || p.id === product.id) return false;

      // 2. Category nikalne ka sab se safe aur strict function
      const extractCat = (cat) => {
        if (!cat) return "";
        if (typeof cat === "string") return cat.toLowerCase().trim();
        if (typeof cat === "object" && cat.name)
          return String(cat.name).toLowerCase().trim();
        return "";
      };

      const pCat = extractCat(p.category);
      const myCat = extractCat(product.category);

      // 3. Agar category khali hai, ya ajeeb format mein hai, toh reject kar do
      if (pCat === "" || myCat === "" || pCat === "[object object]")
        return false;

      // 4. Exact match check karo
      return pCat === myCat;
    })
    .slice(0, 3);

  const handleAddToCart = async () => {
    // String ko safely Number mein convert kiya
    const finalQuantity =
      quantity === "" || Number(quantity) < 1 ? 1 : Number(quantity);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/cart/add/", {
        product_id: product.id,
        quantity: finalQuantity,
      });

      toast.success(response.data.message || "Successfully added to cart!", {
        position: "bottom-right",
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#1a202c",
          color: "#fff",
          padding: "16px",
        },
        iconTheme: { primary: "#f97316", secondary: "#fff" },
      });
    } catch (error) {
      console.error("Catch Error Details:", error);
      toast.error("Failed to add product.", {
        position: "bottom-right",
        style: { borderRadius: "10px", background: "#ef4444", color: "#fff" },
      });
    }
  };

  if (loading) {
    return (
      <h2 className="text-center mt-20 text-2xl font-bold">
        Loading Product Details...
      </h2>
    );
  }

  if (!product) {
    return (
      <h2 className="text-center mt-20 text-2xl font-bold text-red-500">
        Product Not Found!
      </h2>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <Toaster />
      <Container>
        <div className="grid md:grid-cols-[40%_60%] gap-10 py-20">
          {/* LEFT SIDE IMAGE */}
          <div>
            <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden">
              <img
                src={
                  product?.image?.startsWith("http")
                    ? product.image
                    : `http://127.0.0.1:8000${product?.image}`
                }
                alt={product?.name || "Product Image"}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold">{product?.name}</h1>
              <p>Per Kg</p>

              {/* ✅ Dynamic Price Calculation */}
              <h2 className="text-3xl font-bold text-orange-500">
                $
                {(
                  Number(product?.price) *
                  (quantity === "" ? 1 : Number(quantity))
                ).toFixed(2)}
              </h2>

              <p className="text-gray-600">
                Fresh and organic {product?.name?.toLowerCase() || "item"}{" "}
                direct from the farms. Premium quality guaranteed to keep you
                healthy and fresh!
              </p>

              {/* ✅ Clean Input Logic without type mismatch */}
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                onBlur={() => {
                  // Agar khali chor diya toh 1 wapas aa jayega
                  if (quantity === "" || parseInt(quantity) < 1) {
                    setQuantity("1");
                  }
                }}
                className="border w-24 h-12 text-center rounded-lg outline-none focus:border-orange-500 transition"
              />

              {/* BUTTON */}
              <div>
                <Button onClick={handleAddToCart}>Add to Cart</Button>
              </div>

              {/* CATEGORY */}
              <p>
                <span className="font-bold">Categories:</span>{" "}
                {typeof product?.category === "object"
                  ? product?.category?.name
                  : product?.category}
                , Organic
              </p>

              {/* SHARE */}
              <h2 className="font-bold text-2xl">Share:</h2>
              <div className="flex gap-4 text-lg">
                <i className="fa-brands fa-facebook-f hover:text-orange-400 transition cursor-pointer"></i>
                <i className="fa-brands fa-twitter hover:text-orange-400 transition cursor-pointer"></i>
                <i className="fa-brands fa-google-plus-g hover:text-orange-400 transition cursor-pointer"></i>
                <i className="fa-brands fa-linkedin hover:text-orange-400 transition cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <Products
          productHeading={
            <>
              <span className="text-orange-500">Related</span> Products
            </>
          }
          showFilter={false}
          customData={relatedProducts}
        />
      )}
    </div>
  );
}
