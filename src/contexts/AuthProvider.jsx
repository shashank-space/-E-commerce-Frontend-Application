import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

  // ✅ Load user once safely
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // ✅ Sync user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const register = (name, email, password) => {
    const newUser = { name, email, password };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    setUser({ name, email });
  };

  const login = (email, password) => {
    const registered = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registered) return false;

    if (
      registered.email === email &&
      registered.password === password
    ) {
      setUser({
        name: registered.name,
        email: registered.email,
      });

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;