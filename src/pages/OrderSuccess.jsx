import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function OrderSuccess() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg w-full">
        <CheckCircle
          size={80}
          className="mx-auto text-green-500 mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with ShopSphere.
          Your order has been confirmed and will be processed shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/orders"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            View Orders
          </Link>

          <Link
            to="/"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;