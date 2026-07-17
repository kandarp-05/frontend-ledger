import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../api/axios";
import toast from "react-hot-toast";

const AddInitialFunds = () => {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionPassword, setTransactionPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const data = {
      toAccount: account,
      amount: amount,
      transactionPassword: transactionPassword,
      idempotencyKey: uuidv4(),
    };
    try {
      const response = await api.post(
        "/transaction/system/initial-funds",
        data,
      );
      toast.success(response.data.message);
      setTransactionPassword("");
      setAccount("");
      setAmount("");
    } catch (error) {
      console.log(error.response.data);
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
          Add Initial Funds
        </h2>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Account Number
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              onChange={(e) => {
                setAccount(e.target.value);
              }}
              type="text"
              placeholder="Enter account number"
              value={account}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Amount
            </label>

            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              type="number"
              value={amount}
              placeholder="Enter initial amount"
              required
            />

            <label className="text-sm font-semibold text-gray-700">
              Transaction Password
            </label>

            <input
              onChange={(e) => {
                setTransactionPassword(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              type="password"
              value={transactionPassword}
              placeholder="Enter transaction password"
              required
            />
          </div>

          <button
            className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200 active:scale-95"
            onClick={(e) => {
              submitHandler(e);
            }}
          >
            Add Funds
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInitialFunds;
