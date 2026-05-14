export default function OrderSummaryCheck() {
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
          <tr>
            <td className="p-3 border">Strawberry</td>
            <td className="p-3 border">$85.00</td>
          </tr>
          <tr>
            <td className="p-3 border">Berry</td>
            <td className="p-3 border">$70.00</td>
          </tr>
          <tr>
            <td className="p-3 border">Lemon</td>
            <td className="p-3 border">$35.00</td>
          </tr>

          <tr>
            <td className="p-3 border font-medium">Subtotal</td>
            <td className="p-3 border">$190</td>
          </tr>
          <tr>
            <td className="p-3 border font-medium">Shipping</td>
            <td className="p-3 border">$50</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Total</td>
            <td className="p-3 border font-bold">$240</td>
          </tr>
        </tbody>
      </table>
      <button className="mt-6 bg-orange-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full ">
        Place Order
      </button>
    </div>
  );
}
