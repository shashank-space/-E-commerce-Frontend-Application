import {
  Laptop,
  Shirt,
  Gem,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "electronics",
    label: "Electronics",
    icon: <Laptop size={42} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "men's clothing",
    label: "Fashion",
    icon: <Shirt size={42} />,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 3,
    title: "jewelery",
    label: "Jewelry",
    icon: <Gem size={42} />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "women's clothing",
    label: "Accessories",
    icon: <Sparkles size={42} />,
    color: "bg-purple-100 text-purple-600",
  },
];

function Categories() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold mb-12">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleClick(category.title)}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >

            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center ${category.color}`}
            >
              {category.icon}
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              {category.label}
            </h3>

            <p className="text-gray-500 mt-2">
              Explore collection
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;