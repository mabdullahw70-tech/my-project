import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  User,
  Settings,
  X,
  ChevronRight,
} from "lucide-react";

export default function DashboardSidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: <ShoppingBag size={20} />,
    },
    {
      name: "Wishlist",
      path: "/dashboard/wishlist",
      icon: <Heart size={20} />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <User size={20} />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        h-screen w-[290px]
        bg-[#081028]/95 backdrop-blur-2xl
        border-r border-white/10
        flex flex-col
        transition-all duration-300
        shadow-2xl shadow-black/40
        overflow-hidden
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* Top */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-white/10 shrink-0">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[5px] text-orange-500 mb-1 font-medium">
            Ecommerce
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide truncate">
            Fruitkha
          </h2>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300 shrink-0"
        >
          <X size={22} className="text-white" />
        </button>
      </div>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto">
        {/* User Card */}
        <div className="mx-4 sm:mx-5 mt-5 sm:mt-6 p-4 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl shadow-orange-500/20">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-xl font-bold text-white shrink-0">
              S
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                Shoaib Nawaz
              </h3>

              <p className="text-white/80 text-sm truncate">Premium Customer</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4 sm:px-5 py-6">
          {/* Main Menu */}
          <div className="flex items-center gap-3 mb-5 px-2">
            <div className="h-[1px] flex-1 bg-white/10"></div>

            <p className="text-[11px] uppercase tracking-[4px] text-gray-400 whitespace-nowrap font-medium">
              Main Menu
            </p>

            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            {links.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    group relative flex items-center justify-between
                    px-4 sm:px-5 py-4 rounded-2xl
                    transition-all duration-300
                    overflow-hidden
                    ${
                      active
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                        : "bg-white/[0.03] text-gray-300 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {/* Active Glow */}
                  {active && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent"></div>
                  )}

                  {/* Left */}
                  <div className="relative flex items-center gap-4 min-w-0">
                    {/* Icon */}
                    <div
                      className={`
                        shrink-0 transition-all duration-300
                        ${
                          active
                            ? "text-white"
                            : "text-gray-400 group-hover:text-orange-500"
                        }
                      `}
                    >
                      {link.icon}
                    </div>

                    {/* Text */}
                    <span className="font-medium text-[15px] truncate">
                      {link.name}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    size={18}
                    className={`
                      shrink-0 transition-all duration-300
                      ${
                        active
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Extra Card */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[4px] text-orange-500 mb-3">
              Premium Access
            </p>

            <h3 className="text-white text-lg font-semibold leading-7 mb-2">
              Upgrade Your Shopping Experience
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              Get faster delivery, premium offers and exclusive discounts.
            </p>

            <button className="mt-5 w-full py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-medium">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
