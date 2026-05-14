import { Link } from "react-router-dom";
import { useState } from "react";

export default function DashboardNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#081028]/85 backdrop-blur-2xl">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left Side */}
            <div className="min-w-0">
              <p className="text-orange-500 text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] mb-1 font-medium">
                Ecommerce Panel
              </p>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-wide truncate">
                Dashboard
              </h2>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex w-11 h-11 lg:w-12 lg:h-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-orange-500 items-center justify-center transition-all duration-300 hover:scale-105 shrink-0"
              >
                <i className="fa-solid fa-magnifying-glass text-white text-sm lg:text-base"></i>
              </button>

              {/* Notification */}
              <button className="relative hidden md:flex w-11 h-11 lg:w-12 lg:h-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 items-center justify-center transition-all duration-300 hover:scale-105 shrink-0">
                <i className="fa-regular fa-bell text-white text-sm lg:text-base"></i>

                <span className="absolute top-3 right-3 w-2 h-2 bg-orange-500 rounded-full"></span>
              </button>

              {/* Website */}
              <Link
                to="/"
                className="hidden sm:flex items-center gap-2 px-4 lg:px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 text-white text-sm font-medium shadow-lg whitespace-nowrap"
              >
                <i className="fa-solid fa-globe text-sm"></i>

                <span className="hidden lg:block">Website</span>
              </Link>

              {/* Logout */}
              <button className="hidden sm:flex items-center gap-2 px-4 lg:px-5 py-3 rounded-2xl bg-red-500/90 hover:bg-red-600 transition-all duration-300 text-white text-sm font-medium shadow-lg shadow-red-500/20 whitespace-nowrap">
                <i className="fa-solid fa-arrow-right-from-bracket text-sm"></i>

                <span className="hidden lg:block">Logout</span>
              </button>

              {/* User */}
              <button className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl pl-2 pr-3 py-2 hover:bg-white/10 transition-all duration-300 shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-base lg:text-lg font-bold text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-all duration-300">
                  S
                </div>

                <div className="hidden xl:block text-left leading-tight">
                  <h3 className="text-sm font-semibold text-white truncate">
                    Shoaib Nawaz
                  </h3>

                  <p className="text-xs text-gray-400 truncate">
                    Premium Customer
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-start justify-center pt-28 px-4 animate-fadeIn">
          <div className="w-full max-w-3xl rounded-[30px] border border-white/10 bg-[#0f172a]/95 backdrop-blur-2xl shadow-2xl overflow-hidden animate-authCard">
            {/* Top */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Search Dashboard
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Search orders, products & customers
                </p>
              </div>

              <button
                onClick={() => setSearchOpen(false)}
                className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark text-white text-xl"></i>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-6">
              <div className="relative">
                <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>

                <input
                  type="text"
                  placeholder="Search orders, customers, products..."
                  className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-orange-500 transition-all duration-300"
                />
              </div>

              {/* Search Results */}
              <div className="mt-6 space-y-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500 transition-all duration-300 cursor-pointer">
                  <p className="text-white font-semibold">Order #45821</p>

                  <p className="text-gray-400 text-sm mt-1">
                    Customer: Ali Khan
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500 transition-all duration-300 cursor-pointer">
                  <p className="text-white font-semibold">Fresh Orange Box</p>

                  <p className="text-gray-400 text-sm mt-1">Product Category</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500 transition-all duration-300 cursor-pointer">
                  <p className="text-white font-semibold">Customer Profile</p>

                  <p className="text-gray-400 text-sm mt-1">Shoaib Nawaz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
