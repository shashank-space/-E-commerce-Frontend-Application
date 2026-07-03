import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Truck, ShieldCheck } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[85vh] flex items-center">

        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              🚀 New Collection 2026
            </span>

            <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight text-slate-900">
              Discover
              <br />

              <span className="text-blue-600">
                Amazing Products
              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              Shop thousands of premium electronics, fashion,
              accessories and lifestyle products with secure
              checkout, fast shipping and unbeatable prices.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg"> Shop Now <ArrowRight size={20} />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("featured-products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition font-semibold"
              >Explore
              </button>

            </div>

            {/* FEATURES */}

            <div className="flex flex-wrap gap-8 mt-12">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-600" />
                <span>Secure Payment</span>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-blue-600" />
                <span>Free Delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <Star className="text-yellow-500 fill-yellow-500" />
                <span>4.9 Rating</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=900"
              alt="Watch"
              className="relative w-full max-w-lg drop-shadow-2xl"
            />

            {/* Floating Card */}

            <div
              onClick={() => navigate("/products?sort=price-low")}
              className="absolute top-8 right-0 bg-white shadow-2xl rounded-2xl px-6 py-4 cursor-pointer hover:scale-105 hover:shadow-3xl transition-all duration-300">

              <p className="text-sm text-gray-500">
                Today's Offer
              </p>

              <h3 className="text-3xl font-bold text-blue-600">
                40% OFF
              </h3>
              
              <p className="text-xs text-gray-500 mt-1">Click to view deals → </p>

            </div>

            {/* Rating */}

            <div className="absolute bottom-10 left-0 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3">

              <Star className="text-yellow-500 fill-yellow-500" />

              <div>

                <h4 className="font-bold">
                  25K+
                </h4>

                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;