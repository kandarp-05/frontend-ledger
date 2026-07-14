import React, { useState } from "react";
import { currencyOptions } from "../../data/currency";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("INR");
  const [confirmTransactionPassword, setConfirmTransactionPassword] =
    useState("");
  const [transactionPassword, setTransactionPassword] = useState("");
  const [border, setBorder] = useState("Black");

  async function submitHandler(e) {
    e.preventDefault();
    if (confirmTransactionPassword !== transactionPassword) {
      alert("Password do not matched");
      return;
    }
    try {
      const data = {
        currency,
        transactionPassword,
      };
      const response = await api.post("/accounts/create-account", data);
      toast.success(response.data.message);
      setCurrency("INR");
      setTransactionPassword("");
      setConfirmTransactionPassword("");
      navigate("/accounts");
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">
      <div className="w-full relative max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 p-10">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute top-4 right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
          Create Bank Account
        </h2>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Currency
            </label>

            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
              value={currency}
            >
              {currencyOptions.map(function (item) {
                return (
                  <option key={item.id} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Transaction Password
            </label>

            <input
              onChange={(e) => {
                setTransactionPassword(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              type="password"
              placeholder="Enter transaction password"
              value={transactionPassword}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Confirm Transaction Password
            </label>

            <input
              onChange={(e) => {
                const value = e.target.value;
                setConfirmTransactionPassword(value);
                setBorder(transactionPassword === value ? "Green" : "Red");
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              style={{ color: `${border}` }}
              type="password"
              placeholder="Confirm transaction password"
              value={confirmTransactionPassword}
              required
            />
          </div>

          <button
            className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
            onClick={(e) => {
              submitHandler(e);
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
