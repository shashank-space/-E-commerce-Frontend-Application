import { ShoppingCart } from "lucide-react";

function EmptyCart() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <ShoppingCart size={80} className="text-gray-400" />

      <h2 className="text-3xl font-bold mt-6">
        Your Cart is Empty
      </h2>

      <p className="text-gray-500 mt-2">
        Start shopping to add products.
      </p>
    </div>
  );
}

export default EmptyCart;