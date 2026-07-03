import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  ChevronDown,
  Package,
  Heart,
  Settings,
  LogOut,
  UserCircle,
  Search,
} from "lucide-react";

import { useContext, useEffect, useRef, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    function closeDropdown(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeDropdown);

    return () =>
      document.removeEventListener(
        "mousedown",
        closeDropdown
      );
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-black tracking-tight"
        >
          <span className="text-slate-900">
            Shop
          </span>

          <span className="text-blue-600">
            Sphere
          </span>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Orders
          </NavLink>

        </nav>

        <div className="hidden lg:flex items-center relative w-80">
          <Search
            size={18}
            className="absolute left-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full pl-11 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Cart */}

          <Link
            to="/cart"
            className="relative w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
          >
            <ShoppingCart size={20} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login */}

          {!user ? (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition"
            >
              Login
            </Link>
          ) : (
            <div
              className="relative"
              ref={dropdownRef}
            >

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-gray-100 transition"
              >

                <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div className="hidden lg:block text-left">

                  <h3 className="font-semibold text-slate-900">
                    {user.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {user.email}
                  </p>

                </div>

                <ChevronDown
                  size={18}
                  className={`transition ${
                    open ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open && (

                <div className="absolute right-0 mt-3 w-72 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">

                  {/* Header */}

                  <div className="p-6">

                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    <h2 className="font-bold text-lg">
                      {user.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>

                  </div>

                  <hr />

                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100"
                  >
                    <UserCircle size={18} />
                    My Profile
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100"
                  >
                    <Package size={18} />
                    Orders
                  </Link>

                  <Link
                    to="/cart"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100"
                  >
                    <ShoppingCart size={18} />
                    Cart
                  </Link>

                  <Link
                    to="/wishlist"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100"
                  >
                    <Heart size={18} />
                    Wishlist
                  </Link>

                  <Link
                    to="/settings"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100"
                  >
                    <Settings size={18} />
                    Settings
                  </Link>

                  <hr />

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-6 py-4 text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>

                </div>

              )}

            </div>
          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;