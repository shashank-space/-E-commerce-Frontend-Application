import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function OrderSummary() {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : subtotal === 0 ? 0 : 9.99;

  const tax = subtotal * 0.08;

  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />

                  <div>
                    <h3 className="font-medium text-sm line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <span className="font-semibold">
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t pt-4">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shipping === 0
                  ? "Free"
                  : `$${shipping.toFixed(2)}`}
              </span>
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
        </>
      )}
    </div>
  );
}

export default OrderSummary;