import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Check for authentication token
  const token = localStorage.getItem("token");

  // Redirect to login if token is missing
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Allow access to protected routes
  return <Outlet />;
};

export default PrivateRoute;
