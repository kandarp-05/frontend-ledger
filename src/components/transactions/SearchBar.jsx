import React, { useState } from "react";
import api from "../../pages/api/axios";

const SearchBar = ({ accounts, setTransactions }) => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [loading, setLoading] = useState(false);

  async function filterTransactions() {
    try {
      setLoading(true);

      let response;

      if (selectedAccount === "") {
        response = await api.get("/transaction");
      } else {
        response = await api.get(
          `/transaction?accountId=${selectedAccount}`
        );
      }

      setTransactions(response.data.transactions);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 flex flex-col gap-6">

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Filter Transactions
        </h2>

        <p className="text-gray-500 mt-2">
          Select an account to view its transactions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">

        <div className="flex-1">

          <select
            value={selectedAccount}
            onChange={(e) => {
              setSelectedAccount(e.target.value);
            }}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">All Accounts</option>

            {accounts.map((account) => (
              <option
                key={account._id}
                value={account._id}
              >
                {account._id}
              </option>
            ))}

          </select>

        </div>

        <button
          disabled={loading}
          onClick={filterTransactions}
          className="bg-cyan-700 hover:bg-cyan-800 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-200 active:scale-95"
        >
          {loading ? "Filtering..." : "Filter"}
        </button>

      </div>

    </div>
  );
};

export default SearchBar;