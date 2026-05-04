import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

export default function CartTable() {
  const [cart, setCart] = useState([
    {
      id: 1,
      img: "src/assets/product-img-1.jpg",
      name: "Strawberry",
      price: 85,
      quantity: 1,
    },
    {
      id: 2,
      img: "src/assets/product-img-2.jpg",
      name: "Strawberry",
      price: 85,
      quantity: 1,
    },
    {
      id: 3,
      img: "src/assets/product-img-3.jpg",
      name: "Strawberry",
      price: 85,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, value) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Number(value)) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 45;
  const total = subtotal + shipping;

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
                {cart.map((item) => (
                  <tr key={item.id} className="h-16 border-t">
                    
                    <td>
                      <button onClick={() => removeItem(item.id)}><i class="fa-solid fa-xmark"></i></button>
                    </td>

                    
                    <td className="text-center">
                      <img
                        src={item.img}
                        alt="product"
                        className="mx-auto w-12 h-14 object-cover"
                      />
                    </td>

                    <td>{item.name}</td>
                    <td>Rs {item.price}</td>

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

                    <td>Rs {item.price * item.quantity}</td>
                  </tr>
                ))}
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
              <Button className="w-full sm:w-auto">
                Update Cart
              </Button>
              <Button className="w-full sm:w-auto">
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

              <button className="mt-4 bg-orange-500 text-[#1a202c] rounded-full w-full sm:w-36 h-12 hover:bg-slate-800 hover:text-white">
                Apply
              </button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}