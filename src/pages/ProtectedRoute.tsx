import React, { useEffect } from "react";
import { useAuth } from "../features/authentication/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";

//types
import { ChildrenType } from "../types/children.type";

function ProtectedRoute({ children }: ChildrenType) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Spinner />;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
