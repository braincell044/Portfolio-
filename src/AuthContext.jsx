import React, { useState, useEffect, useContext, createContext, useCallback } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  useEffect(() => {
    // Your authentication logic here
  }, [logout]);

  const value = {
    currentUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}