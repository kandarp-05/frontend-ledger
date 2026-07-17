import React from "react";
import { SearchX } from "lucide-react";

const AccountNotFound = () => {
  return (
    <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-8 shadow text-center">

      <SearchX className="mx-auto text-red-500 mb-4" size={45} />

      <h2 className="text-2xl font-bold text-red-700">
        No Account Found
      </h2>

      <p className="text-gray-500 mt-3">
        No account exists with this account number.
      </p>

    </div>
  );
};

export default AccountNotFound;