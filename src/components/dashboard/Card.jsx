import React from 'react'

const Card = (props) => {
  return (
    <div className='grid grid-cols-3 items-center border border-gray-200 rounded-xl px-6 py-4 bg-white hover:bg-slate-50 transition duration-200 shadow-sm'>

      <h2 className='font-medium text-slate-800'>
        {props.transaction.title}
      </h2>

      <h2 className={`text-center font-semibold ${
        props.transaction.type === "Credit"
          ? "text-green-600"
          : "text-red-600"
      }`}>
        {props.transaction.amount}
      </h2>

      <h2 className='text-right text-gray-600 font-medium'>
        {props.transaction.type}
      </h2>

    </div>
  )
}

export default Card;