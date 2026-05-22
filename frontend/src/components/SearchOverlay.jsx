import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchOverlay({ isOpen, setIsOpen }) {
  const inputRef = useRef(null);
  const hasFetched = useRef(false);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const closeSearch = () => {
    setIsOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";

      if (!hasFetched.current) {
        setIsLoading(true);
        axios
          .get("http://127.0.0.1:8000/api/shop-products/")
          .then((response) => {
            setAllProducts(response.data);
            hasFetched.current = true;
          })
          .catch((error) => {
            console.error("Error fetching products for search:", error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const filteredProducts =
    searchTerm.trim() === ""
      ? []
      : allProducts.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  const handleProductClick = (id) => {
    closeSearch();
    navigate(`/single-product/${id}`);
  };

  const handleTrendingClick = (keyword) => {
    setSearchTerm(keyword);
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={closeSearch}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a]/90 backdrop-blur-lg flex items-start justify-center pt-24 px-4 sm:px-6 animate-overlayFade transition-all"
    >
      {/* Close Button */}
      <button
        onClick={closeSearch}
        className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Search Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl text-center animate-modalZoom relative flex flex-col items-center"
      >
        <h2 className="text-white text-3xl sm:text-5xl font-extrabold mb-8 tracking-wide drop-shadow-md">
          What are you looking for?
        </h2>

        {/* Input */}
        <div className="relative w-full z-[10000]">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-white text-gray-900 border-2 border-transparent rounded-full py-4 sm:py-5 px-8 pr-16 text-xl sm:text-2xl outline-none placeholder:text-gray-400 focus:border-orange-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition duration-300"
          />

          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300">
            {isLoading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              <i className="fa-solid fa-magnifying-glass"></i>
            )}
          </button>
        </div>

        {/* LIVE SEARCH RESULTS DROPDOWN */}
        {searchTerm.trim() !== "" && (
          <div className="absolute top-[90px] sm:top-[100px] left-0 w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-[9990] text-left border border-gray-100">
            <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleProductClick(p.id)}
                    className="flex items-center gap-5 p-4 hover:bg-orange-50 cursor-pointer border-b border-gray-100 last:border-none transition duration-200"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-xl flex-shrink-0 flex items-center justify-center p-2 border border-gray-200">
                      <img
                        src={
                          p.image?.startsWith("http")
                            ? p.image
                            : `http://127.0.0.1:8000${p.image}`
                        }
                        alt={p.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {typeof p.category === "object"
                          ? p.category?.name
                          : p.category || "Organic"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-500 font-black text-xl">
                        ${p.price}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-10 flex flex-col items-center justify-center text-gray-400">
                  <i className="fa-solid fa-box-open text-5xl mb-4 opacity-50"></i>
                  <p className="text-xl font-medium">
                    No products found for "{searchTerm}"
                  </p>
                  <p className="text-sm mt-1">
                    Try checking your spelling or use different keywords.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Popular Searches */}
        {searchTerm.trim() === "" && (
          <div className="mt-12 animate-overlayFade">
            <p className="text-gray-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Popular Searches
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Strawberry", "Orange", "Lemon", "Berry"].map((keyword) => (
                <span
                  key={keyword}
                  onClick={() => handleTrendingClick(keyword)}
                  // ✅ DESIGN FIX: Hover effect ko orange background aur white text mein badal diya taake sab saaf nazar aaye!
                  className="px-6 py-2.5 bg-white/10 text-white border border-white/20 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:-translate-y-1 flex items-center justify-center"
                >
                  <i className="fa-solid fa-arrow-trend-up mr-2 text-white"></i>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
