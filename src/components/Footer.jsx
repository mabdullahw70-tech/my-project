import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d1f2d" }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 sm:px-9 lg:px-9 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">About us</h3>
          <div className="w-8 h-[2px] bg-orange-500 mb-5"></div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae.
          </p>
        </div>

        {/* Column 2 — Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Get in Touch
          </h3>
          <div className="w-8 h-[2px] bg-orange-500 mb-5"></div>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
            <li>support@fruitkha.com</li>
            <li>+00 111 222 3333</li>
          </ul>
        </div>

        {/* Column 3 — Pages */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Pages</h3>
          <div className="w-8 h-[2px] bg-orange-500 mb-5"></div>
          <ul className="space-y-3 text-sm text-gray-400">
            {["Home", "About", "Shop", "News", "Contact"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors"
              >
                <span className="text-orange-500 text-xs">&#9658;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
          <div className="w-8 h-[2px] bg-orange-500 mb-5"></div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Subscribe to our mailing list to get the latest updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none"
              style={{ backgroundColor: "#112233" }}
            />
            <button className="px-4 py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white">
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-7xl mx-auto px-8 border-t px-6 sm:px-10 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderColor: "#1e3344" }}
      >
        <p className="text-xs text-gray-400 text-center sm:text-left">
          Copyrights © 2019 -{" "}
          <span className="text-orange-500 font-medium">Imran Hossain</span>
          , All Rights Reserved.
          <br />
          <br className="sm:hidden" /> Distributed By -{" "}
          <span className="text-orange-500 font-medium">Themewagon</span>
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-400">
          <FaFacebookF
            size={14}
            className="hover:text-orange-500 cursor-pointer transition-colors"
          />
          <FaTwitter
            size={14}
            className="hover:text-orange-500 cursor-pointer transition-colors"
          />
          <FaInstagram
            size={14}
            className="hover:text-orange-500 cursor-pointer transition-colors"
          />
          <FaLinkedinIn
            size={14}
            className="hover:text-orange-500 cursor-pointer transition-colors"
          />
          <FaDribbble
            size={14}
            className="hover:text-orange-500 cursor-pointer transition-colors"
          />
        </div>
      </div>
    </footer>
  );
}