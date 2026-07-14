import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../pages/api/axios";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const SystemProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [systemUser, setSystemUser] = useState(false);
  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await api.get("/auth/me");
        if (response.data.success && response.data.role === "System") {
          setSystemUser(true);
          toast.success(response.data.message);
        } else if (response.data.success) {
          setAuthorized(true);
          toast.error("Not a System User");
        }
      } catch (error) {
        setAuthorized(false);
      } finally {
        setAuthorized(false);
        setLoading(false);
      }
    }
    checkAuth();
  }, []);
  return loading ? (
    <h2>Loading...</h2>
  ) : systemUser ? (
    children
  ) : authorized ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

export default SystemProtectedRoute;
