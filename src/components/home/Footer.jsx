import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-gray-300 px-10 py-12 flex flex-wrap justify-between gap-10'>

      <div className='max-w-sm'>
        <h1 className='text-2xl font-bold text-cyan-400 mb-3'>
          Bank Ledger
        </h1>

        <p className='leading-7 text-gray-400'>
          Manage your bank accounts, monitor balances, and securely track every transaction from one place.
        </p>
      </div>

      <div>
        <h2 className='text-lg font-semibold text-white mb-4'>
          Quick Links
        </h2>

        <div className='flex flex-col gap-2'>
          <Link className='hover:text-cyan-400 transition duration-200' to='/'>
            Home
          </Link>

          <Link className='hover:text-cyan-400 transition duration-200' to='/login'>
            Login
          </Link>

          <Link className='hover:text-cyan-400 transition duration-200' to='/register'>
            Register
          </Link>
        </div>
      </div>

      <div>
        <h2 className='text-lg font-semibold text-white mb-4'>
          Contact
        </h2>

        <p className='text-gray-400'>
          support@bankledger.com
        </p>
      </div>

      <div className='w-full border-t border-slate-700 pt-6 mt-6 text-center text-sm text-gray-500'>
        © 2026 Bank Ledger. All rights reserved.
      </div>

    </div>
  )
}

export default Footer;