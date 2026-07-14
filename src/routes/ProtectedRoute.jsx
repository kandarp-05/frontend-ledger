import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../pages/api/axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await api.get("/auth/me");
        if (response.data.success) {
          setAuthorized(true);
        }
      } catch (error) {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);
  return loading ? (
    <h2>Loading....</h2>
  ) : authorized ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
