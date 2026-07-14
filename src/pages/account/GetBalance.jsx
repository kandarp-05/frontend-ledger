import React, { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

const GetBalance = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");
  async function fetchBalance() {
    const response = await api.get(`/accounts/balance/${accountNumber}`);
    setBalance(await response?.data?.balance);
    toast.success(response.data.message);
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
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
          Get Balance
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Check the available balance of your account.
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Account Number
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
              type="text"
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => {
              fetchBalance();
            }}
            className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200 active:scale-95"
          >
            Check Balance
          </button>

          {balance !== "" ? (
            <div className="mt-6 rounded-xl bg-slate-100 border border-gray-200 p-6 text-center">
              <p className="text-gray-500">Current Balance</p>

              <h2 className="text-4xl font-bold text-green-600 mt-2">
                {balance}
              </h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default GetBalance;
