import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ item }) {
  const {
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div className="flex gap-5 bg-white shadow rounded-2xl p-5">
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 object-contain"
      />

      <div className="flex-1">
        <h2 className="font-semibold">{item.title}</h2>

        <p className="text-blue-600 font-bold mt-2">
          ${item.price}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <button onClick={() => decreaseQty(item.id)}>
            <Minus />
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQty(item.id)}>
            <Plus />
          </button>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500"
      >
        <Trash2 />
      </button>
    </div>
  );
}

export default CartItem;