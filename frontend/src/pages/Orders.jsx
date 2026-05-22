import { useState, useEffect, useCallback } from "react"; // ✅ useCallback import karein
import axios from "axios";
import NewOrderModal from "../components/NewOrderModal";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false);

  // ✅ fetchOrders ko useCallback mein wrap kiya taake ye stable rahe
  const fetchOrders = useCallback(() => {
    axios
      .get("http://127.0.0.1:8000/api/orders/")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Order fetch error:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Ab useEffect mein fetchOrders ko call karein
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)),
    );
    axios
      .post(`http://127.0.0.1:8000/api/update-order-status/`, {
        order_id: id,
        status: newStatus,
      })
      .catch((err) => console.error("Status update error:", err));
  };

  if (loading)
    return (
      <div className="text-white text-center py-20 text-xl">
        Loading Orders...
      </div>
    );

  return (
    <div className="space-y-6">
      {/* ... baaki UI code wahi rahega ... */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-orange-500 uppercase tracking-[3px] text-xs mb-2">
            Ecommerce Orders
          </p>
          <h1 className="text-4xl font-bold text-white">My Orders</h1>
        </div>
        <button
          onClick={() => setIsNewOrderOpen(true)}
          className="px-5 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition text-white font-semibold"
        >
          New Order
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-xl">
        <table className="w-full text-left">
          <thead className="bg-white/[0.05] border-b border-white/10">
            <tr>
              <th className="px-6 py-5 text-gray-300">Order ID</th>
              <th className="px-6 py-5 text-gray-300">Date</th>
              <th className="px-6 py-5 text-gray-300">Status</th>
              <th className="px-6 py-5 text-gray-300">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-white/10 hover:bg-white/[0.03]"
              >
                <td className="px-6 py-5 text-white">{order.id}</td>
                <td className="px-6 py-5 text-gray-300">{order.date}</td>
                <td className="px-6 py-5">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
                    }
                    className="bg-transparent text-orange-400 cursor-pointer outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="px-6 py-5 text-white">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <NewOrderModal
        isOpen={isNewOrderOpen}
        onClose={() => setIsNewOrderOpen(false)}
        onOrderAdded={fetchOrders}
      />
    </div>
  );
}
