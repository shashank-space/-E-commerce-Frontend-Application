import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import { getProduct } from "../services/api";
import useCart from "../hooks/useCart";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    alert("Product added to cart!");
  };

  if (loading) return <Loader />;

  if (!product) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>

        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 rounded-lg border px-5 py-2 hover:bg-gray-100"
      >
        ← Back
      </button>

      <div className="grid gap-12 lg:grid-cols-2">

        {/* Image */}

        <div className="rounded-xl bg-white p-10 shadow">

          <img
            src={product.image}
            alt={product.title}
            className="mx-auto h-96 object-contain"
          />

        </div>

        {/* Details */}

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {product.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            {product.title}
          </h1>

          <div className="mt-5 flex items-center gap-4">

            <span className="text-lg text-yellow-500">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-gray-500">
              ({product.rating.count} Reviews)
            </span>

          </div>

          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

          <h2 className="mt-8 text-5xl font-bold text-green-600">
            ${product.price}
          </h2>

          {/* Quantity */}

          <div className="mt-8 flex items-center gap-4">

            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
              className="rounded-lg border px-4 py-2"
            >
              -
            </button>

            <span className="text-xl font-semibold">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="rounded-lg border px-4 py-2"
            >
              +
            </button>

          </div>

          <div className="mt-10 flex gap-4">

            <button
              onClick={handleAddToCart}
              className="rounded-lg bg-black px-8 py-4 text-white transition hover:bg-gray-800"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                handleAddToCart();
                navigate("/cart");
              }}
              className="rounded-lg bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetail;