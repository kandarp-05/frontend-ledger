import React from "react";

const TransactionCard = ({ transaction }) => {
  const formattedDate = new Date(transaction.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
  const maskedFromAccount = `xxxx xxxx xxxx ${transaction.fromAccount._id.toString().slice(-4)}`;
const maskedToAccount = `xxxx xxxx xxxx ${transaction.toAccount._id.toString().slice(-4)}`;

  return (
    <div className="grid grid-cols-5 items-center bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm hover:bg-slate-50 transition duration-200">

      <h2 className="text-slate-700 font-medium">
        {formattedDate}
      </h2>

      <div className="text-center">
        <p className="font-medium text-slate-700">
          {maskedFromAccount}
        </p>
      </div>
      <div className="text-center">
        <p className="font-medium text-slate-700">
          {maskedToAccount}
        </p>
      </div>

      <h2 className="text-center font-semibold text-slate-800">
        ₹{transaction.amount.toLocaleString()}
      </h2>

      <div className="flex justify-end">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            transaction.status === "COMPLETED"
              ? "bg-green-100 text-green-700"
              : transaction.status === "PENDING"
              ? "bg-yellow-100 text-yellow-700"
              : transaction.status === "FAILED"
              ? "bg-red-100 text-red-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {transaction.status}
        </span>
      </div>

    </div>
  );
};

export default TransactionCard;