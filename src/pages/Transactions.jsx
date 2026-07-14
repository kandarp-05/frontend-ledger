import React, { useEffect, useState } from "react";
import api from "./api/axios";

import Navbar from "../components/transactions/Navbar";
import TransactionHeader from "../components/transactions/TransactionHeader";
import SearchBar from "../components/transactions/SearchBar";
import TransactionList from "../components/transactions/TransactionList";

const Transactions = () => {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPage();
  }, []);

  async function loadPage() {
    try {
      const [userResponse, accountResponse, transactionResponse] =
        await Promise.all([
          api.get("/auth/me"),
          api.get("/accounts"),
          api.get("/transaction"),
        ]);

      setUser(userResponse.data.user);
      setAccounts(accountResponse.data.accounts);
      setTransactions(transactionResponse.data.transactions);
      console.log(transactionResponse);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-cyan-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar user={user} />

      <TransactionHeader />

      <SearchBar accounts={accounts} setTransactions={setTransactions} />

      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;
