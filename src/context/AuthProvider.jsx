import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // ✅ Ensure localStorage is initialized before reading
    setLocalStorage();

    // ✅ Now safely read
    const { employeesData, adminData } = getLocalStorage();
    setUserData({ employeesData, adminData });
  }, []);

  // ⛔ Don't wrap Provider in an extra <div>
  // It causes unnecessary DOM nesting and context delay

  // ✅ Render nothing until data is loaded
  if (!userData) return null;

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
