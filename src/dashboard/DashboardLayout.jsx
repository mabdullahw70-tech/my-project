import { Outlet } from "react-router-dom";
import { useState } from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0b1220] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-3xl rounded-full animate-blob"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-500/20 blur-3xl rounded-full animate-blob animation-delay-2000"></div>

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-cyan-500/10 blur-3xl rounded-full animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar */}
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Overlay Mobile */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
            sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>

        {/* Content Area */}
        <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen">
          {/* Mobile Topbar */}
          <div className="lg:hidden sticky top-0 z-30 border-b border-white/10 bg-[#081028]/90 backdrop-blur-xl px-5 py-4 flex items-center justify-between shadow-xl">
            {/* Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>

            {/* Title */}
            <div className="text-center">
              <h2 className="text-lg font-bold tracking-wide">
                Fruitkha Dashboard
              </h2>

              <p className="text-xs text-gray-400">Premium Ecommerce Panel</p>
            </div>

            {/* Profile */}
            <button className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center font-bold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all duration-300">
              S
            </button>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden lg:block">
            <DashboardNavbar />
          </div>

          {/* Page Content */}
          <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Glass Container */}
            <div className="min-h-[calc(100vh-120px)] rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-2xl p-5 sm:p-6 md:p-8 animate-authCard">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
