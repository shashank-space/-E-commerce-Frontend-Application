import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer/Footer";

import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import SortDropdown from "../components/SortDropdown/SortDropdown";

import useProducts from "../hooks/useProducts";


function Home() {
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (search.trim()) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

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
      case "name":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return data;
  }, [products, search, category, sort]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-28">
          {/* FIX: Categories now navigate instead of only filtering */}
          <Categories
            onCategoryClick={(cat) =>
              navigate(`/products?category=${cat}`)
            }
          />
        </div>

        <section id="featured-products" className="py-28">
          <h2 className="text-5xl font-bold mb-10">
            Featured Products
          </h2>

          <div className="flex flex-col gap-5 mb-10">
            <SearchBar value={search} onChange={setSearch} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Filters
                categories={categories}
                value={category}
                onChange={setCategory}
              />

              <SortDropdown value={sort} onChange={setSort} />
            </div>
          </div>

          {loading && <Loader />}

          {error && (
            <h2 className="text-center text-red-500 text-xl">
              {error}
            </h2>
          )}

          {!loading && !error && (
            <>
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    No products found
                  </h3>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;