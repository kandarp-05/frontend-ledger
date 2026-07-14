import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
const TransferAmount = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionPassword, setTransactionPassword] = useState("");
  const navigate = useNavigate();
  async function submitHander(e) {
    e.preventDefault();
    const data = {
      fromAccount,
      toAccount,
      amount,
      transactionPassword,
      idempotencyKey: uuidv4(),
    };
    try {
      await api.post("/transaction", data);
      toast.success(response.data.message);
      setFromAccount("");
      setToAccount("");
      setAmount("");
      setTransactionPassword("");
      navigate("/transactions");
    } catch (error) {}
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
          Transfer Amount
        </h2>

        <form
          onSubmit={(e) => {
            submitHander(e);
          }}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              From Account
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              onChange={(e) => {
                setFromAccount(e.target.value);
              }}
              placeholder="Enter your account number"
              type="text"
              value={fromAccount}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              To Account
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              onChange={(e) => {
                setToAccount(e.target.value);
              }}
              placeholder="Enter recipient account number"
              type="text"
              value={toAccount}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Amount
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter transfer amount"
              type="number"
              value={amount}
            />
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

          <button className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200 active:scale-95">
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferAmount;
