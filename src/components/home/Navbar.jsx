import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-slate-900 border-b border-slate-700 px-8 py-4 flex items-center justify-between shadow-lg'>
        <h2 onClick={()=>{
        navigate('/')
      }} className='text-2xl font-bold text-cyan-400 tracking-wide cursor-pointer'>
            Bank Ledger
        </h2>

        <div className='flex items-center gap-4'>
            <Link
                className='px-5 py-2 rounded-lg text-gray-200 font-medium transition duration-200 hover:bg-slate-800 hover:text-cyan-400'
                to='/login'
            >
                Login
            </Link>

            <Link
                className='px-5 py-2 rounded-lg bg-cyan-700 text-white font-semibold transition duration-200 hover:bg-cyan-800'
                to='/register'
            >
                Register
            </Link>
        </div>
    </div>
  )
}

export default Navbar;