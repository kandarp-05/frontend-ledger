import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Banknote, KeyRound, ShieldQuestion } from 'lucide-react'

const QuickAction = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

      <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <button
          onClick={() => {
            navigate('/get-balance')
          }}
          className="flex flex-col items-center gap-4 p-6 bg-cyan-700 hover:bg-cyan-800 text-white rounded-2xl shadow-md transition duration-200 active:scale-95"
        >
          <Banknote className="h-10 w-10" />
          <h3 className="text-lg font-semibold">Get Balance</h3>
          <p className="text-sm text-cyan-100 text-center">
            View your current account balance.
          </p>
        </button>

        <button
          onClick={() => {
            navigate('/change-transaction-password')
          }}
          className="flex flex-col items-center gap-4 p-6 bg-slate-800 hover:bg-slate-900 text-white rounded-2xl shadow-md transition duration-200 active:scale-95"
        >
          <KeyRound className="h-10 w-10" />
          <h3 className="text-lg font-semibold">
            Change Password
          </h3>
          <p className="text-sm text-slate-300 text-center">
            Update your transaction password securely.
          </p>
        </button>

        <button
          onClick={() => {
            navigate('/forgot-transaction-password')
          }}
          className="flex flex-col items-center gap-4 p-6 bg-slate-800 hover:bg-slate-900 text-white rounded-2xl shadow-md transition duration-200 active:scale-95"
        >
          <ShieldQuestion className="h-10 w-10" />
          <h3 className="text-lg font-semibold">
            Forgot Password
          </h3>
          <p className="text-sm text-slate-300 text-center">
            Reset your transaction password.
          </p>
        </button>

      </div>

    </div>
  )
}

export default QuickAction;