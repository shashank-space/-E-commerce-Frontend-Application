import { useContext } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import toast from "react-hot-toast";

import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useContext(WishlistContext);

  const liked = isInWishlist(product.id);

  const handleWishlist = () => {
    if (liked) {
      removeFromWishlist(product.id);
      toast.success("Removed from Wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to Wishlist");
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to Cart");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">

      {/* Product Image */}
      <div className="relative bg-gray-100 h-64 flex items-center justify-center p-6 overflow-hidden">

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <Heart
            size={20}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-44 object-contain transition-transform duration-300 hover:scale-105"
        />

      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-5">

        <p className="text-sm text-blue-600 capitalize">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-semibold line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mt-3">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-medium">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count})
          </span>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between">

          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            <ShoppingCart size={18} />
            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;