import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-100">
      <h1 className="text-8xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3 mb-8 text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;