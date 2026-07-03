import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Loader from "../components/Loader/Loader";

function Products() {
  const { products, loading, error } = useProducts();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const category = params.get("category");
  const search = params.get("search") || "";

  const [sort, setSort] = useState("");

  const filtered = useMemo(() => {
    let data = [...products];

    // Category Filter
    if (category) {
      data = data.filter((p) => p.category === category);
    }

    // Search Filter
    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    switch (sort) {
      case "price-low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        data.sort((a, b) => b.rating.rate - a.rating.rate);
        break;

      default:
        break;
    }

    return data;
  }, [products, category, search, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

      </div>

      {search && (
        <p className="mb-5 text-gray-600">
          Search Results for:
          <span className="font-semibold text-blue-600">
            {" "}
            "{search}"
          </span>
        </p>
      )}

      {loading && <Loader />}

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">
            No Products Found
          </h2>
          <p className="text-gray-500 mt-2">
            Try searching with a different keyword.
          </p>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <ProductGrid products={filtered} />
      )}

    </div>
  );
}

export default Products;