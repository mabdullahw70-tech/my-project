import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AddProductModal from "../components/AddProductModal";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = useCallback(() => {
    axios
      .get("http://127.0.0.1:8000/api/shop-products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/product/delete/${id}/`)
        .then(() => fetchProducts())
        .catch((err) => console.error("Delete error:", err));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Product Inventory</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-orange-500 rounded-2xl text-white font-semibold hover:bg-orange-600 transition"
        >
          + Add New Product
        </button>
      </div>

      {/* Product Table */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-gray-300">
          <thead className="bg-white/5 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td className="px-6 py-4 text-white font-medium">{p.name}</td>
                <td className="px-6 py-4">${p.price}</td>
                <td className="px-6 py-4 capitalize">
                  {typeof p.category === "object"
                    ? p.category?.name
                    : p.category}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="text-red-400 hover:text-red-500"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Component */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProductAdded={fetchProducts}
      />
    </div>
  );
}
