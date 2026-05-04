import { useState, useEffect } from "react";
import Container from "./Container";
import logo from "../assets/fruitkhalogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pages", path: "/pages" },
    {
      name: "News",
      path: "/news",
      submenu: [
        { name: "News", path: "/news" },
        { name: "Single News", path: "/single-news" },
      ],
    },
    { name: "Contact", path: "/contact" },
    {
      name: "Shop",
      path: "/shop",
      submenu: [
        { name: "Shops", path: "/shops" },
        { name: "Checkout", path: "/checkout" },
        { name: "Single Product", path: "/single-product" },
        { name: "Cart", path: "/Cart" },
      ],
    },
  ];

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        sticky ? "bg-[#1a202c] shadow" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img className="h-8 lg:h-12" src={logo} alt="logo" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 text-white font-bold">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link to={item.path} className="hover:text-orange-500">
                  {item.name}
                </Link>

                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 top-full bg-[#1a202c] hidden group-hover:block">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 hover:text-orange-500 whitespace-nowrap"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex gap-4 text-white text-lg">
            <Link to={"/search"}>
              <i className="hover:text-orange-500 fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to={"/cart"}>
              <i className="hover:text-orange-500 fa-solid fa-cart-arrow-down"></i>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#1a202c] text-white px-8 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {menuItems.map((item) => (
          <div key={item.name}>
            <Link
              to={item.path}
              className="block py-2 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>

            {/* Mobile Submenu */}
            {item.submenu &&
              item.submenu.map((sub) => (
                <Link
                  key={sub.name}
                  to={sub.path}
                  className="block pl-4 py-1 text-sm hover:text-orange-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {sub.name}
                </Link>
              ))}
          </div>
        ))}

        {/* Mobile Icons */}
        <div className="flex gap-4 pt-4 text-lg">
          <i className="hover:text-orange-500 fa-solid fa-magnifying-glass"></i>
          <i className="hover:text-orange-500 fa-solid fa-cart-arrow-down"></i>
        </div>
      </div>
    </div>
  );
}
