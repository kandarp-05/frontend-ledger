import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuickAction = () => {
    const navigate = useNavigate();

  return (
    <div className='bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col items-center gap-8'>

      <h2 className='text-3xl font-bold text-slate-800'>
        Quick Actions
      </h2>

      <div className='w-full flex flex-col sm:flex-row justify-center gap-6'>

        <button onClick={()=>{
          navigate('/transfer')
        }} className='flex-1 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-4 rounded-xl shadow-md transition duration-200 active:scale-95'>
          Transfer Amount
        </button>

        <button onClick={()=>{
          navigate('/transactions')
        }} className='flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 rounded-xl shadow-md transition duration-200 active:scale-95'>
          View Transactions
        </button>

        <button onClick={()=>{
          navigate('/accounts')
        }} className='flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 rounded-xl shadow-md transition duration-200 active:scale-95'>
          Accounts
        </button>
      </div>

    </div>
  )
}

export default QuickAction;