import React from 'react'
import Card from './Card';

const Feature = () => {
    const data = [
  {
    id: 1,
    icon: "💳",
    title: "Manage Accounts",
    description: "Create and manage multiple bank accounts."
  },
  {
    id: 2,
    icon: "💸",
    title: "Record Transactions",
    description: "Add deposits, withdrawals and transfers."
  },
  {
    id: 3,
    icon: "📊",
    title: "Track Balance",
    description: "View your current account balance instantly."
  },
  {
    id: 4,
    icon: "🔒",
    title: "Secure Login",
    description: "JWT-based authentication."
  }
];

  return (
    <section className='bg-slate-100 py-24 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col items-center'>

        <h2 className='text-4xl md:text-5xl font-bold text-slate-800'>
          Features
        </h2>

        <p className='mt-4 text-lg text-gray-600 text-center max-w-2xl'>
          Everything you need to securely manage your accounts, monitor balances,
          and track financial transactions in one place.
        </p>

        <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
          {data.map(function (feature) {
            return <Card feature={feature} key={feature.id} />;
          })}
        </div>

      </div>
    </section>
  )
}

export default Feature;