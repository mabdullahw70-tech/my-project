import { useState } from "react";
import axios from "axios";

export default function NewOrderModal({ isOpen, onClose, onOrderAdded }) {
  const [formData, setFormData] = useState({
    total_price: "",
    status: "Pending",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Page reload rokne ke liye
    console.log("Submit button clicked, Data:", formData); // ✅ Check karne ke liye

    try {
      // API call (Yakeeni banayein ke backend mein ye URL define hai)
      await axios.post("http://127.0.0.1:8000/api/create-order/", formData);
      console.log("Order saved successfully!");

      onOrderAdded(); // Dashboard refresh karega
      onClose(); // Modal band karega
    } catch (err) {
      console.error("Order creation error:", err);
      alert("Order save nahi hua, console check karein!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0b1220] p-8 rounded-3xl border border-white/10 w-96 space-y-4"
      >
        <h2 className="text-white text-xl font-bold">Create New Order</h2>

        <input
          type="number"
          placeholder="Total Price"
          className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:border-orange-500 outline-none"
          onChange={(e) =>
            setFormData({ ...formData, total_price: e.target.value })
          }
          required
        />

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20"
          >
            Cancel
          </button>
          {/* ✅ Type="submit" hona zaruri hai */}
          <button
            type="submit"
            className="flex-1 py-3 bg-orange-500 rounded-xl text-white font-bold hover:bg-orange-600"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}
