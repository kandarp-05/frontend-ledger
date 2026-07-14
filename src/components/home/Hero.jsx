import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className='min-h-[90vh] bg-linear-to-br from-slate-900 via-cyan-900 to-slate-800 flex flex-col justify-center items-center px-6 text-center'>
        <h1 className='text-5xl md:text-6xl font-bold text-white leading-tight'>
          Manage Your Money <span className='text-cyan-400'>Smarter</span>
        </h1>

        <p className='mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-8'>
          Keep track of your transactions, monitor account balances, and manage
          your finances securely with a simple and efficient Bank Ledger
          application.
        </p>

        <button
          onClick={() => {
            navigate('/login');
          }}
          className='mt-10 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-200'
        >
          Get Started
        </button>
      </section>
    </>
  )
}

export default Hero;