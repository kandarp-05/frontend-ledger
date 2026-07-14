import React from 'react'

const WelcomeCard = () => {
  return (
    <div className='bg-linear-to-r from-cyan-700 to-slate-800 rounded-2xl shadow-xl px-10 py-10 text-white flex flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl font-bold'>
        Hello, Kandarp 👋
      </h1>

      <h2 className='text-lg text-cyan-100'>
        Welcome back! Manage your accounts and transactions with confidence.
      </h2>
    </div>
  )
}

export default WelcomeCard;