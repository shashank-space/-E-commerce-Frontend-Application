import { Link } from "react-router-dom";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">
          My Orders
        </h1>

        <p className="text-gray-500 mb-8">
          You haven't placed any orders yet.
        </p>

        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">
        My Orders
      </h1>

      <div className="space-y-8">
        {orders
          .slice()
          .reverse()
          .map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold">
                    Order #{order.id}
                  </h2>

                  <p className="text-gray-500">
                    {order.orderDate}
                  </p>
                </div>

                <div className="text-right">
                  <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium">
                    {order.status}
                  </span>

                  <p className="mt-3 text-2xl font-bold">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="border-t pt-6 space-y-5">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <div className="font-bold">
                      $
                      {(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Orders;