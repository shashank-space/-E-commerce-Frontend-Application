import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              ShopSphere
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Your one-stop destination for premium online shopping.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/">Home</Link>

              <Link to="/orders">Orders</Link>

              <Link to="/cart">Cart</Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              support@shopsphere.com
            </p>

          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <p className="text-center text-gray-400">
          © 2026 ShopSphere. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;