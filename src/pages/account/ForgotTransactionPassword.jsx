import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const ForgotTransactionPassword = () => {
  const [email, setEmail] = useState("");
  const [accountNo, setAccountNo] = useState("");

  const navigate = useNavigate();

  async function submitHandler(e) {
    const data = {
      email: email,
      accountId: accountNo,
    };
    e.preventDefault();
    try {
      const response = await api.post(
        "/accounts/forgot-transaction-password",
        data,
      );
      toast.success(response.data.message);
      setEmail("");
      setAccountNo("");
      navigate("/accounts");
    } catch (error) {
      console.log(error.response?.data);
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
          Forgot Transaction Password
        </h2>

        <p className="text-center text-sm text-gray-500">
          Enter your registered email address and account no. , we'll send you a
          password reset link.
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
          <label className="text-sm font-semibold text-gray-700">
            Account No.
          </label>

          <input
            onChange={(e) => {
              setAccountNo(e.target.value);
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            type="text"
            placeholder="XXXXXXXX5640"
            value={accountNo}
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
          onClick={() => navigate("/accounts")}
          className="text-sm font-medium text-cyan-700 hover:text-cyan-900 transition"
        >
          Back to Account
        </button>
      </div>
    </div>
  );
};

export default ForgotTransactionPassword;
