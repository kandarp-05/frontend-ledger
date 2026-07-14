import React from 'react'

const AccountCard = (props) => {
  return (
    <div className="grid grid-cols-3 items-center bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm hover:bg-slate-50 transition duration-200">

      <h2 className="text-slate-700 font-medium tracking-wide">
        {props.account._id}
      </h2>

      <h2 className="text-center font-medium text-slate-700">
        {props.account.currency}
      </h2>

      <div className="flex justify-end">
        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            props.account.status === "ACTIVE"
              ? "bg-green-100 text-green-700"
              : props.account.status === "FROZEN"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {props.account.status}
        </span>
      </div>

    </div>
  )
}

export default AccountCard;