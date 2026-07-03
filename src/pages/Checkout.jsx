import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";

function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;