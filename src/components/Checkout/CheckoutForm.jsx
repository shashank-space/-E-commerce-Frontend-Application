import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import PaymentMethod from "./PaymentMethod";

import toast from "react-hot-toast";

function CheckoutForm() {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0){ 
        toast.error("Your cart is empty!");
        return;
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;

    const order = {
      id: Date.now(),
      customer: formData,
      items: cart,
      subtotal,
      shipping,
      tax,
      total: subtotal + shipping + tax,
      orderDate: new Date().toLocaleString(),
      status: "Confirmed",
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...orders, order])
    );

    clearCart();
    
    toast.success("Order placed successfully!");
    
    navigate("/order-success");

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold">
        Shipping Details
      </h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
        required
      />

      <textarea
        rows="4"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
        required
      />

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="border rounded-xl p-3"
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="PIN Code"
          value={formData.pincode}
          onChange={handleChange}
          className="border rounded-xl p-3"
          required
        />
      </div>

      <PaymentMethod
        value={formData.payment}
        onChange={(payment) =>
          setFormData({
            ...formData,
            payment,
          })
        }
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
      >
        Place Order
      </button>
    </form>
  );
}

export default CheckoutForm;