import { CircleUser } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../pages/api/axios'

const Navbar = (props) => {
  const navigate=useNavigate()
  async function loggedOut(){
    try {
      await api.post('/auth/logout');
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='sticky top-0 z-50 bg-slate-900 border-b border-slate-700 shadow-lg px-8 py-4 flex items-center justify-between'>

      <h2 onClick={()=>{
        navigate('/dashboard')
      }} className='text-2xl font-bold text-cyan-400 cursor-pointer tracking-wide'>
        Bank Ledger
      </h2>

      <div className='flex items-center gap-8'>
        <Link
          className='text-gray-300 font-medium transition duration-200 hover:text-cyan-400'
          to='/dashboard'
        >
          Dashboard
        </Link>

        <Link
          className='text-gray-300 font-medium transition duration-200 hover:text-cyan-400'
          to='/transactions'
        >
          Transactions
        </Link>
        <Link
          className='text-gray-300 font-medium transition duration-200 hover:text-cyan-400'
          to='/accounts'
        >
          Accounts
        </Link>
      </div>

      <div className='flex items-center gap-4'>

        <div className='flex items-center gap-2 text-gray-300'>
          <CircleUser className='h-8 w-8 text-cyan-400' />
          <h2 className='font-medium'>{props?.user?.name}</h2>
        </div>

        <button onClick={()=>{
          loggedOut();
        }} className='bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200'>
          Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar;