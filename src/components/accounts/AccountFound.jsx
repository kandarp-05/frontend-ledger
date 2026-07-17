import React from 'react'

const AccountFound = ({account}) => {
  return (
    <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-5">
        Account Found
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span className="font-semibold">Account Number</span>
          <span>{account._id}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Currency</span>
          <span>{account.currency}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Status</span>

          <span className="bg-green-600 text-white px-3 py-1 rounded-full">
            {account.status}
          </span>
        </div>

      </div>

    </div>
  );
}

export default AccountFound