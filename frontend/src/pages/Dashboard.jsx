import { useState, useEffect } from "react";
import axios from "axios";
import NewOrderModal from "../components/NewOrderModal";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total_orders: 0,
    total_products: 0,
    pending_deliveries: 0,
    revenue: 0,
  });

  // ✅ Profile state add kar di
  const [profile, setProfile] = useState({
    first_name: "Loading...",
    email: "",
  });
  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false);

  useEffect(() => {
    // Stats fetch karna
    axios
      .get("http://127.0.0.1:8000/api/dashboard-stats/")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Error fetching stats:", error));

    // ✅ Profile fetch karna (Naya add kiya)
    axios
      .get("http://127.0.0.1:8000/api/get-profile/")
      .then((res) => setProfile(res.data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  const cards = [
    {
      title: "Total Orders",
      value: stats.total_orders,
      icon: "fa-solid fa-bag-shopping",
      growth: "+12%",
      desc: "Total orders placed",
    },
    {
      title: "Total Products",
      value: stats.total_products,
      icon: "fa-solid fa-box",
      growth: "+5%",
      desc: "Products in store",
    },
    {
      title: "Pending Deliveries",
      value: stats.pending_deliveries,
      icon: "fa-solid fa-truck-fast",
      growth: "+2%",
      desc: "Orders on the way",
    },
    {
      title: "Total Revenue",
      value: `$${stats.revenue}`,
      icon: "fa-solid fa-dollar-sign",
      growth: "+8%",
      desc: "Total sales generated",
    },
  ];

  const recentOrders = [
    {
      id: "#FRK1024",
      product: "Fresh Red Apples",
      status: "Delivered",
      price: "$45",
    },
    {
      id: "#FRK1025",
      product: "Organic Mango Box",
      status: "Pending",
      price: "$78",
    },
    {
      id: "#FRK1026",
      product: "Fresh Orange Pack",
      status: "Processing",
      price: "$36",
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <p className="text-orange-500 uppercase tracking-[3px] text-[11px] sm:text-xs mb-2">
            Ecommerce Dashboard
          </p>
          {/* ✅ Naam dynamic kar diya */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Welcome Back, {profile.first_name} 👋
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-[15px] max-w-2xl leading-6">
            Manage your orders, products and customer activities from your
            premium Fruitkha dashboard.
          </p>
        </div>
        <button
          onClick={() => setIsNewOrderOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white text-sm font-semibold shadow-lg shadow-orange-500/20"
        >
          <i className="fa-solid fa-plus"></i> New Order
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-3xl rounded-full"></div>
            <div className="relative flex items-start justify-between mb-5">
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">
                  {card.title}
                </p>
                <h2 className="text-3xl sm:text-[32px] font-bold text-white">
                  {card.value}
                </h2>
              </div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-orange-500 text-base sm:text-lg group-hover:scale-105 transition-all duration-300 shrink-0">
                <i className={card.icon}></i>
              </div>
            </div>
            <div className="relative flex items-end justify-between gap-3">
              <p className="text-gray-500 text-xs sm:text-sm leading-5">
                {card.desc}
              </p>
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-[11px] sm:text-xs font-semibold">
                {card.growth}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.8fr] gap-5">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Recent Orders
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Latest customer purchases
              </p>
            </div>
            <button className="text-xs sm:text-sm text-orange-500 hover:text-orange-400 transition">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500 text-sm shrink-0">
                    <i className="fa-solid fa-box"></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                      {order.product}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {order.id}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-green-500/10 text-green-400">
                    {order.status}
                  </span>
                  <h4 className="text-white font-bold text-base sm:text-lg">
                    {order.price}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewOrderModal
        isOpen={isNewOrderOpen}
        onClose={() => setIsNewOrderOpen(false)}
        onOrderAdded={() => window.location.reload()}
      />
    </div>
  );
}
