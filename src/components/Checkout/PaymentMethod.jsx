function PaymentMethod({ value, onChange }) {
  const methods = [
    {
      id: "cod",
      title: "Cash on Delivery",
      subtitle: "Pay when your order arrives",
    },
    {
      id: "upi",
      title: "UPI",
      subtitle: "Google Pay, PhonePe, Paytm",
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      subtitle: "Visa, Mastercard, RuPay",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Payment Method
      </h2>

      {methods.map((method) => (
        <label
          key={method.id}
          className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition ${
            value === method.id
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300 hover:border-blue-400"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={method.id}
            checked={value === method.id}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1"
          />

          <div>
            <h3 className="font-semibold">
              {method.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {method.subtitle}
            </p>
          </div>
        </label>
      ))}
    </div>
  );
}

export default PaymentMethod;