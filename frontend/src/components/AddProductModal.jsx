import { useState } from "react";
import axios from "axios";

export default function AddProductModal({ isOpen, onClose, onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("category", formData.category);
    if (formData.image) data.append("image", formData.image);

    try {
      await axios.post("http://127.0.0.1:8000/api/add-product/", data);
      onProductAdded(); // List refresh karne ke liye
      onClose(); // Modal band karne ke liye
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0b1220] p-8 rounded-3xl border border-white/10 w-96 space-y-4 shadow-2xl"
      >
        <h2 className="text-white text-xl font-bold">Add New Product</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none focus:border-orange-500"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none focus:border-orange-500"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none focus:border-orange-500"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        />
        <input
          type="file"
          className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white/10 file:text-white"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
        />
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 bg-white/10 rounded-xl text-white font-bold hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-orange-500 rounded-xl text-white font-bold hover:bg-orange-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
