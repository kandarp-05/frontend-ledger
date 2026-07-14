import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    const data = { email };
    try {
      const response = await api.post("/auth/forgot-password", data);
      toast.success(response.data.message);
      setEmail("");
      navigate("/login");
    } catch (error) {}
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
        <h2 className="text-3xl font-bold text-slate-800">Forgot Password</h2>

        <p className="text-center text-sm text-gray-500">
          Enter your registered email address and we'll send you a password
          reset link.
        </p>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            type="email"
            placeholder="john@example.com"
            value={email}
            required
          />

          <button
            className="mt-4 rounded-lg bg-cyan-700 py-3 font-semibold text-white transition duration-200 hover:bg-cyan-800"
            type="submit"
          >
            Send Reset Link
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="text-sm font-medium text-cyan-700 hover:text-cyan-900 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
