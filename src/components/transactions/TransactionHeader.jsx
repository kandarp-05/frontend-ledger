import { Plus } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const TransactionHeader = () => {
  const navigate=useNavigate()
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-gray-200 rounded-2xl shadow-xl p-8'>

      <div>
        <h2 className='text-3xl font-bold text-slate-800'>
          Transactions
        </h2>

        <p className='text-gray-500 mt-2'>
          View and manage all your account transactions.
        </p>
      </div>

      <div className='flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-200 cursor-pointer active:scale-95'> 
        <button onClick={()=>{
          navigate("/transfer")
        }}>
          <Plus className='h-5 w-5' />
          Add Transaction
        </button>
      </div>

    </div>
  )
}

export default TransactionHeader