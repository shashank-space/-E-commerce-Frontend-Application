import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

import CartItem from "../components/CartItem/CartItem";
import EmptyCart from "../components/EmptyCart/EmptyCart";

function Cart() {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">
          Shopping Cart
        </h1>

        <span className="text-gray-500">
          {cart.length} Item{cart.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <Link
            to="/"
            className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>

              {shipping === 0 ? (
                <span className="text-green-600 font-medium">
                  FREE
                </span>
              ) : (
                <span>${shipping.toFixed(2)}</span>
              )}
            </div>

            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {shipping !== 0 && (
            <p className="text-sm text-gray-500 mt-4">
              Spend $
              {(100 - subtotal).toFixed(2)}
              {" "}more to unlock FREE shipping.
            </p>
          )}

          <Link
            to="/checkout"
            className="block text-center mt-8 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;