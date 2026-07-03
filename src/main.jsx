import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import CartProvider from "./contexts/CartProvider";
import AuthProvider from "./contexts/AuthProvider";
import WishlistProvider from "./contexts/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </WishlistProvider>

          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);