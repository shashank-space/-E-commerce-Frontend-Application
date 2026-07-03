import { Heart } from "lucide-react";

function Wishlist() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="bg-white rounded-2xl shadow-md p-10 text-center">

        <Heart
          size={70}
          className="mx-auto text-red-500 mb-5"
        />

        <h1 className="text-3xl font-bold mb-3">
          My Wishlist
        </h1>

        <p className="text-gray-500">
          You haven't added any products to your wishlist yet.
        </p>

      </div>

    </div>
  );
}

export default Wishlist;