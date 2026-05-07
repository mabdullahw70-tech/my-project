export default function Orders() {
  const orders = [
    {
      id: "#1234",
      date: "12 May 2026",
      status: "Delivered",
      price: "$120",
    },
    {
      id: "#1235",
      date: "14 May 2026",
      status: "Pending",
      price: "$85",
    },
    {
      id: "#1236",
      date: "15 May 2026",
      status: "Processing",
      price: "$64",
    },
    {
      id: "#1237",
      date: "18 May 2026",
      status: "Delivered",
      price: "$210",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-orange-500 uppercase tracking-[3px] text-[11px] sm:text-xs mb-2">
            Ecommerce Orders
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            My Orders
          </h1>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Track and manage all your recent orders easily.
          </p>
        </div>

        <button className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white text-sm font-semibold shadow-lg shadow-orange-500/20">
          New Order
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-xl">
        <table className="w-full text-left">
          <thead className="bg-white/[0.05] border-b border-white/10">
            <tr>
              <th className="px-6 py-5 text-sm font-semibold text-gray-300">
                Order ID
              </th>

              <th className="px-6 py-5 text-sm font-semibold text-gray-300">
                Date
              </th>

              <th className="px-6 py-5 text-sm font-semibold text-gray-300">
                Status
              </th>

              <th className="px-6 py-5 text-sm font-semibold text-gray-300">
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-white/10 hover:bg-white/[0.03] transition-all duration-300"
              >
                <td className="px-6 py-5 text-white font-medium">{order.id}</td>

                <td className="px-6 py-5 text-gray-300">{order.date}</td>

                <td className="px-6 py-5">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-500/10 text-green-400"
                        : order.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-white font-semibold">
                  {order.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile + Tablet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-lg"
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-gray-400 text-xs mb-1">Order ID</p>

                <h2 className="text-lg font-bold text-white">{order.id}</h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500">
                <i className="fa-solid fa-box"></i>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Date</p>

                <p className="text-white text-sm font-medium">{order.date}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Status</p>

                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-500/10 text-green-400"
                      : order.status === "Pending"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Price</p>

                <p className="text-white font-bold text-lg">{order.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
