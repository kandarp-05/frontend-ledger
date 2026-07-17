import { Search } from "lucide-react";
import React, { useState } from "react";
import api from "../../pages/api/axios";
import AccountFound from "./AccountFound";
import AccountNotFound from "./AccountNotFound";

const SearchAccount = () => {
  const [searchingAccount, setSearchingAccount] = useState("");
  const [accounts, setAccounts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  async function submitHandler() {
    if (!searchingAccount.trim()) return;

    setLoading(true);
    setHasSearched(true);

    try {
      const response = await api.get(`/accounts/${searchingAccount}`);
      setAccounts(response.data.searched_account);
    } catch (error) {
      setAccounts([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">Search Account</h2>

        <p className="text-gray-500 mt-2">Search by account number.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

          <input
            className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-700"
            onChange={(e) => {
              setSearchingAccount(e.target.value);
            }}
            type="text"
            value={searchingAccount}
            placeholder="Enter account number..."
          />
        </div>

        <button
          onClick={submitHandler}
          className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {loading && (
        <h2 className="text-center mt-6 text-gray-500">Searching...</h2>
      )}

      {!loading &&
        hasSearched &&
        accounts.length > 0 &&
        accounts.map((account) => (
          <AccountFound key={account._id} account={account} />
        ))}

      {!loading && hasSearched && accounts.length === 0 && <AccountNotFound />}
    </div>
  );
};

export default SearchAccount;
