import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

export default function AuthLayoutProvider({ children }) {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <AuthContext.Provider value={{ isLoginPage }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthLayout() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("value is accessed outside of context");
  return context;
}
