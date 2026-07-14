import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
      
      <div className='text-5xl mb-5'>
        {props.feature.icon}
      </div>

      <h2 className='text-xl font-bold text-slate-800 mb-3'>
        {props.feature.title}
      </h2>

      <p className='text-gray-600 leading-7'>
        {props.feature.description}
      </p>

    </div>
  )
}

export default Card;