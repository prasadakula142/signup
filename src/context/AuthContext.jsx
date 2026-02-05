import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const MOCK_USER = {
  id: "USR-001",
  name: "Sarah",
  email: "sarah@example.com",
  phone: "9876543210",
  avatar: "",
  addresses: []
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      localStorage.setItem("user", JSON.stringify(MOCK_USER));
      setUser(MOCK_USER);
    }
  }, []);

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
