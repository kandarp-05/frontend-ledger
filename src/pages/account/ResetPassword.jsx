import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [border, setBorder] = useState("Black");

  async function submitHandler(e) {
    const { token } = useParams();
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Password does not matched");
    }
    const data = {
      transactionPassword: password,
    };
    try {
      const response = await api.post(
        `/accounts/reset-transaction-password/${token}`,
        data,
      );
      toast.success(response.data.message);
      setPassword("");
      setConfirmPassword("");
      navigate("/accounts");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-cyan-900 to-slate-800 px-4">
      <div className="w-full relative max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 px-10 py-10 flex flex-col items-center gap-6">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute top-4 right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-slate-800">
          Change Transaction Password
        </h2>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label className="text-sm font-semibold text-gray-700">
            New Transaction Password
          </label>

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            type="password"
            placeholder="Enter new password"
            value={password}
            required
          />

          <label className="text-sm font-semibold text-gray-700">
            Confirm New Transaction Password
          </label>

          <input
            onChange={(e) => {
              const value = e.target.value;
              setConfirmTransactionPassword(value);
              setBorder(transactionPassword === value ? "Green" : "Red");
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            style={{ color: `${border}` }}
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            required
          />

          <button
            className="mt-4 rounded-lg bg-cyan-700 py-3 font-semibold text-white transition duration-200 hover:bg-cyan-800"
            type="submit"
          >
            Reset Transaction Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
