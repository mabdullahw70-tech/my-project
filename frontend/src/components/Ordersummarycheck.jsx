import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderSummaryCheck() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Backend se Cart data mangwana
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cart/")
      .then((response) => {
        setCart(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setLoading(false);
      });
  }, []);

  // ✅ Totals calculate karna
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0,
  );
  const shipping = cart.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  if (loading) {
    return (
      <div className="bg-white p-6 shadow rounded-lg w-full text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 shadow rounded-lg w-full">
      <table className="w-full text-sm border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left p-3 border">Your Order Details</th>
            <th className="text-left p-3 border">Price</th>
          </tr>
          <tr className="bg-gray-100">
            <th className="text-left p-3 border">Product</th>
            <th className="text-left p-3 border">Total</th>
          </tr>
        </thead>

        <tbody>
          {/* ✅ Dynamic Products yahan aayenge */}
          {cart.length === 0 ? (
            <tr>
              <td colSpan="2" className="p-3 border text-center text-gray-500">
                Your cart is empty
              </td>
            </tr>
          ) : (
            cart.map((item) => (
              <tr key={item.id}>
                <td className="p-3 border">{item.product_name}</td>
                <td className="p-3 border">
                  ${item.product_price * item.quantity}
                </td>
              </tr>
            ))
          )}

          {/* ✅ Totals */}
          <tr>
            <td className="p-3 border font-medium">Subtotal</td>
            <td className="p-3 border">${subtotal}</td>
          </tr>
          <tr>
            <td className="p-3 border font-medium">Shipping</td>
            <td className="p-3 border">${shipping}</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Total</td>
            <td className="p-3 border font-bold">${total}</td>
          </tr>
        </tbody>
      </table>

      {/* ✅ Aap ka original button */}
      <button
        className="mt-6 bg-orange-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full disabled:bg-gray-400"
        disabled={cart.length === 0}
      >
        Place Order
      </button>
    </div>
  );
}
