import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

//types
import { ChildrenType } from "../types/children.type";

interface AuthContextType {
  isLoginPage: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthLayoutProvider({ children }: ChildrenType) {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <AuthContext.Provider value={{ isLoginPage }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthLayout(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("value is accessed outside of context");
  return context;
}
