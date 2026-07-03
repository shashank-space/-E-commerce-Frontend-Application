# 🛍️ ShopSphere - E-commerce Frontend Application

A modern and responsive **E-commerce Frontend Application** built with **React.js**, **Vite**, **Tailwind CSS**, and **Context API**. The application integrates with the **Fake Store API** to provide a seamless online shopping experience with authentication, shopping cart, wishlist, and checkout functionality.

---

## 🚀 Live Demo

> **Live URL:** *(Add your Vercel/Netlify deployment link here)*

---

## 📸 Screenshots

> Add screenshots of your application here.

- 🏠 Home Page
- 🛒 Product Listing
- 🔍 Search & Filter
- 📦 Product Details
- ❤️ Wishlist
- 🛍️ Shopping Cart
- 💳 Checkout
- 👤 User Profile
- 📱 Responsive Design

---

# ✨ Features

### 🛍️ Product Catalog
- Browse products
- Product Details Page
- Category Filtering
- Product Search
- Sorting by Price & Rating

### 🛒 Shopping Cart
- Add to Cart
- Remove from Cart
- Update Quantity
- Persistent Cart (Local Storage)
- Order Summary

### 👤 Authentication
- User Registration
- Login
- Logout
- Simulated Authentication
- Protected Routes

### ❤️ Wishlist
- Add to Wishlist
- Remove from Wishlist
- Persistent Wishlist

### 💳 Checkout
- Checkout Form
- Form Validation
- Order Summary
- Success Message

### 🎨 UI Features
- Responsive Design
- Toast Notifications
- Error Boundary
- Lazy Loading
- Smooth Navigation
- Modern Profile Dropdown

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Library |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Context API | State Management |
| Fake Store API | Product Data |
| Local Storage | Data Persistence |
| React Hot Toast | Notifications |
| Lucide React | Icons |

---

# 📂 Folder Structure

```
src
│
├── assets
│
├── components
│   ├── Navbar
│   ├── Hero
│   ├── Categories
│   ├── ProductCard
│   ├── ProductGrid
│   ├── SearchBar
│   ├── Filters
│   ├── SortDropdown
│   ├── CartItem
│   ├── Checkout
│   ├── Footer
│   ├── Loader
│   ├── EmptyCart
│   ├── ErrorBoundary
│   ├── ProtectedRoute
│   └── ScrollToTop
│
├── contexts
│   ├── AuthContext
│   ├── CartContext
│   ├── WishlistContext
│   └── ThemeContext
│
├── hooks
│   ├── useProducts
│   ├── useAuth
│   └── useDebounce
│
├── pages
│   ├── Home
│   ├── Products
│   ├── ProductDetail
│   ├── Cart
│   ├── Checkout
│   ├── Login
│   ├── Register
│   ├── Orders
│   ├── Profile
│   ├── Wishlist
│   └── Settings
│
├── services
├── styles
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🔌 API Used

The application uses the **Fake Store API**.

```
https://fakestoreapi.com/products
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-frontend.git
```

## Navigate to project

```bash
cd ecommerce-app
```

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 🧠 State Management

The application uses **Context API** for global state management.

### Auth Context

- Login
- Register
- Logout
- User Persistence

### Cart Context

- Add Item
- Remove Item
- Update Quantity
- Clear Cart

### Wishlist Context

- Add Product
- Remove Product
- Persistent Wishlist

---

# 🔐 Authentication

Authentication is simulated using **Local Storage**.

Protected Routes:

- Cart
- Checkout
- Orders
- Profile
- Wishlist
- Settings

---

# ⚡ Performance Optimizations

- React Lazy Loading
- Suspense
- Error Boundary
- useMemo()
- Local Storage Persistence
- Responsive Layout
- Optimized Rendering
- Image Lazy Loading

---

# 🧪 Testing Checklist

- ✅ Home Page
- ✅ Product Listing
- ✅ Search
- ✅ Category Filter
- ✅ Sorting
- ✅ Product Details
- ✅ Shopping Cart
- ✅ Quantity Update
- ✅ Remove Cart Item
- ✅ Login
- ✅ Register
- ✅ Protected Routes
- ✅ Checkout
- ✅ Wishlist
- ✅ Responsive Design
- ✅ Error Handling

---

# 🚀 Deployment

The application can be deployed using:

- Vercel
- Netlify

For React Router support, create a `vercel.json` file:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

---

# 🔮 Future Enhancements

- Payment Gateway Integration
- Backend Integration
- User Order History
- Product Reviews
- Admin Dashboard
- Coupons & Discounts
- Product Recommendations
- Advanced Filters
- Dark Mode
- Real-time Inventory

---

# 👨‍💻 Author

**Shashank**

GitHub: https://github.com/shashank-space

LinkedIn: *(Add your LinkedIn profile here)*

---

# 📄 License

This project is developed for educational and portfolio purposes.

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!