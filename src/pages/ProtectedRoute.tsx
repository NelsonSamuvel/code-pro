import React, { useEffect } from "react";
import { useAuth } from "../features/authentication/useAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";

//types
import { ChildrenType } from "../types/children.type";

function ProtectedRoute({ children }: ChildrenType) {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
  }, [isAuthenticated, isLoading, navigate]);

  // if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
