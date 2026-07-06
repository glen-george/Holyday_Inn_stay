
import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtectedRoutes({ children }) {

    const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
 
                               }

export default AdminProtectedRoutes

