import React from "react";
import Login from "./pages/auth/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import PageNotFound from "./pages/PageNotFound";
import CreateAccount from "./pages/account/CreateAccount";
import TransferAmount from "./pages/transaction/TransferAmount";
import AddInitialFunds from "./pages/system-auth/AddInitialFunds";
import Account from "./pages/Account";
import ForgotTransactionPassword from "./pages/account/ForgotTransactionPassword";
import ChangeTransactionPassword from "./pages/account/ChangeTransactionPassword";
import GetBalance from "./pages/account/GetBalance";
import ResetPassword from "./pages/account/ResetPassword";
import PublicRoute from "./routes/PublicRoute";
import SystemProtectedRoute from "./routes/SystemProtectedRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route
          path="/initial-funds"
          element={
            <SystemProtectedRoute>
              <AddInitialFunds />
            </SystemProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forgot-transaction-password"
          element={
            <ProtectedRoute>
              <ForgotTransactionPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-transaction-password"
          element={
            <ProtectedRoute>
              <ChangeTransactionPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reset-transaction-password/:token"
          element={<ResetPassword />}
        />

        <Route
          path="/accounts"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-account"
          element={
            <ProtectedRoute>
              <CreateAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transfer"
          element={
            <ProtectedRoute>
              <TransferAmount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/get-balance"
          element={
            <ProtectedRoute>
              <GetBalance />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
