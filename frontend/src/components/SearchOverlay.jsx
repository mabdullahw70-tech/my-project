import { useEffect, useRef } from "react";

export default function SearchOverlay({ isOpen, setIsOpen }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus Input
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // ESC Key Close
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center px-6 animate-overlayFade"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-8 right-8 text-white text-5xl hover:text-orange-500 transition duration-300"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Search Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl text-center animate-modalZoom"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-10">
          Search For Products
        </h2>

        {/* Input */}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-6 pr-16 text-white text-2xl outline-none placeholder:text-gray-300 focus:border-orange-500 transition duration-300"
          />

          <button className="absolute right-5 top-1/2 -translate-y-1/2 text-orange-500 text-3xl hover:scale-110 transition duration-300">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Trending Searches */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <span className="px-5 py-2 bg-white/10 border border-white/10 rounded-full text-white hover:bg-orange-500 transition cursor-pointer">
            Strawberry
          </span>

          <span className="px-5 py-2 bg-white/10 border border-white/10 rounded-full text-white hover:bg-orange-500 transition cursor-pointer">
            Orange
          </span>

          <span className="px-5 py-2 bg-white/10 border border-white/10 rounded-full text-white hover:bg-orange-500 transition cursor-pointer">
            Lemon
          </span>

          <span className="px-5 py-2 bg-white/10 border border-white/10 rounded-full text-white hover:bg-orange-500 transition cursor-pointer">
            Berry
          </span>
        </div>
      </div>
    </div>
  );
}
