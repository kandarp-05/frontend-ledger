import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

      <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
        Transaction History
      </h2>

      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">

          <h2 className="text-2xl font-semibold text-slate-700">
            No Transactions Found
          </h2>

          <p className="text-gray-500 mt-2">
            You don't have any transactions for the selected account.
          </p>

        </div>
      ) : (
        <>
          <div className="grid grid-cols-5 items-center bg-slate-100 border border-gray-200 rounded-xl px-6 py-4 font-semibold text-slate-700 mb-4">
            <h2>Date</h2>
            <h2 className="text-center">From</h2>
            <h2 className="text-center">To</h2>
            <h2 className="text-center">Amount</h2>
            <h2 className="text-right">Status</h2>
          </div>

          <div className="flex flex-col gap-3">
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction._id}
                transaction={transaction}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default TransactionList;