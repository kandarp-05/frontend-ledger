import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../pages/api/axios";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await api.get("/auth/me");
        if (response.data.success) {
          setLoggedIn(true);
        }
      } catch (error) {
        setLoggedIn(false);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);
  return loading ? (
    <h2>Loading...</h2>
  ) : loggedIn ? (
    <Navigate to="/dashboard" replace />
  ) : (
    children
  );
};

export default PublicRoute;
