import React from 'react'

const DashboardPreview = () => {
  return (
    <section className='bg-slate-100 py-24 px-6'>
      <div className='max-w-5xl mx-auto flex flex-col items-center gap-10'>

        <h1 className='text-4xl md:text-5xl font-bold text-slate-800'>
          Dashboard Preview
        </h1>

        <div className='w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-8'>

          <div className='bg-linear-to-r from-cyan-700 to-slate-800 rounded-xl p-6 text-white mb-8'>
            <p className='text-sm uppercase tracking-wider text-gray-200'>
              Current Balance
            </p>

            <h2 className='text-4xl font-bold mt-2'>
              ₹25,450
            </h2>
          </div>

          <h2 className='text-2xl font-bold text-slate-800 mb-6'>
            Recent Transactions
          </h2>

          <div className='flex flex-col gap-4'>

            <div className='flex justify-between items-center border border-gray-200 rounded-xl px-5 py-4 hover:bg-slate-50 transition'>
              <span className='font-medium text-slate-700'>
                Initial Funds
              </span>

              <span className='font-semibold text-green-600'>
                + ₹5,000
              </span>
            </div>

            <div className='flex justify-between items-center border border-gray-200 rounded-xl px-5 py-4 hover:bg-slate-50 transition'>
              <span className='font-medium text-slate-700'>
                Transfer to Account
              </span>

              <span className='font-semibold text-red-600'>
                − ₹1,200
              </span>
            </div>

            <div className='flex justify-between items-center border border-gray-200 rounded-xl px-5 py-4 hover:bg-slate-50 transition'>
              <span className='font-medium text-slate-700'>
                Transfer Received
              </span>

              <span className='font-semibold text-green-600'>
                + ₹700
              </span>
            </div>

            <div className='flex justify-between items-center border border-gray-200 rounded-xl px-5 py-4 hover:bg-slate-50 transition'>
              <span className='font-medium text-slate-700'>
                Transfer to Account
              </span>

              <span className='font-semibold text-red-600'>
                − ₹800
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default DashboardPreview;