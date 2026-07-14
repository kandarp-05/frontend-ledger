import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoBank = () => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center items-center min-h-[70vh] px-4'>
      <div className='bg-white border border-gray-200 rounded-2xl shadow-xl max-w-xl w-full p-10 text-center'>

        <div className='text-6xl mb-6'>
          🏦
        </div>

        <h1 className='text-3xl font-bold text-slate-800 mb-4'>
          No Bank Account Found
        </h1>

        <h2 className='text-gray-600 mb-2'>
          Looks like you haven't created an account yet.
        </h2>

        <h2 className='text-gray-600 mb-8'>
          Create one to start tracking your balance and managing transactions.
        </h2>

        <button
          onClick={() => navigate('/create-account')}
          className='bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-8 py-3 rounded-xl transition duration-200 shadow-md'
        >
          Create Account
        </button>

      </div>
    </div>
  )
}

export default NoBank;