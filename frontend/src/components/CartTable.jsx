import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CartTable() {
  const navigate = useNavigate(); // ✅ Yeh line add karein
  const [cart, setCart] = useState([]); // ✅ Ab ye backend se aayega
  const [loading, setLoading] = useState(true);

  // ✅ 1. Cart ka data Get karna
  const fetchCartItems = () => {
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
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // ✅ 2. Quantity Update karna (Backend + Frontend)
  const updateQuantity = async (id, value) => {
    const newQuantity = Math.max(1, Number(value));

    // Frontend par foran update karne ke liye (taake UI fast lage)
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );

    // Backend ko update bhejna
    try {
      await axios.post("http://127.0.0.1:8000/api/cart/update/", {
        item_id: id,
        quantity: newQuantity,
      });
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // ✅ 3. Item Delete karna (Backend + Frontend)
  const removeItem = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/remove/${id}/`);
      // Agar backend se delete ho jaye toh frontend se bhi nikaal do
      setCart(cart.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // ✅ Totals Calculate karna
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0,
  );
  const shipping = cart.length > 0 ? 45 : 0; // Agar cart khali hai toh shipping 0 hogi
  const total = subtotal + shipping;

  if (loading) {
    return (
      <h2 className="text-center mt-20 text-2xl font-bold">
        Cart is loading...
      </h2>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <Container>
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          {/* 🛒 TABLE */}
          <div className="w-full overflow-x-auto">
            <table className="mt-10 lg:mt-20 min-w-[700px] w-full border text-center table-auto">
              <thead>
                <tr className="bg-gray-300 h-14">
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-10 text-xl font-bold">
                      Your Cart is Empty 🛒
                    </td>
                  </tr>
                ) : (
                  cart.map((item) => (
                    <tr key={item.id} className="h-16 border-t">
                      <td>
                        <button onClick={() => removeItem(item.id)}>
                          <i className="fa-solid fa-xmark text-red-500 text-xl"></i>
                        </button>
                      </td>

                      {/* ✅ Smart Image Rendering Logic */}
                      <td className="text-center">
                        <img
                          src={
                            item.product_image?.startsWith("http")
                              ? item.product_image
                              : `http://127.0.0.1:8000${item.product_image}`
                          }
                          alt={item.product_name}
                          className="mx-auto w-12 h-14 object-cover rounded"
                        />
                      </td>

                      <td>{item.product_name}</td>
                      <td>Rs {item.product_price}</td>

                      <td>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, e.target.value)
                          }
                          className="border w-16 text-center"
                        />
                      </td>

                      <td>Rs {item.product_price * item.quantity}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* 💰 SUMMARY */}
          <div className="w-full">
            <table className="mt-10 lg:mt-20 w-full border text-center">
              <thead className="bg-gray-300 h-14">
                <tr>
                  <th>Total</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                <tr className="h-14 border-t">
                  <th>Subtotal</th>
                  <td>Rs {subtotal}</td>
                </tr>

                <tr className="h-14 border-t">
                  <th>Shipping</th>
                  <td>Rs {shipping}</td>
                </tr>

                <tr className="h-14 border-t font-bold">
                  <th>Total</th>
                  <td>Rs {total}</td>
                </tr>
              </tbody>
            </table>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto" onClick={fetchCartItems}>
                Refresh Cart
              </Button>
              <Button
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
                onClick={() => navigate("/checkout")} // ✅ Button ko rasta bata diya
              >
                Check Out
              </Button>
            </div>

            {/* Coupon */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Coupon"
                className="border rounded-lg w-full h-12 pl-4"
              />
              <button className="mt-4 mb-12 bg-orange-500 text-[#1a202c] rounded-full w-full sm:w-36 h-12 hover:bg-slate-800 hover:text-white transition">
                Apply
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
