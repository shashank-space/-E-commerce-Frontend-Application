import { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error(err); // Optional: logs the actual error
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;