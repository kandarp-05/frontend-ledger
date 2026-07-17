import React, { useEffect, useState } from 'react'
import AccountCard from './AccountCard';
import api from '../../pages/api/axios';

const AccountList = (props) => {
    const [accountList, setAccountList] = useState([])
    useEffect(()=>{
        fetchAccount()
    },[])
    async function fetchAccount() {
        const response=await api.get("/accounts");
        setAccountList(await response?.data?.accounts)
    }
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

      <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
        Account List
      </h2>
      {accountList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">

          <h2 className="text-2xl font-semibold text-slate-700">
            No Account Found
          </h2>

          <p className="text-gray-500 mt-2">
            You don't have any account.
          </p>

        </div>
      ) : (
      <>
      <div className="grid grid-cols-3 items-center bg-slate-100 border border-gray-200 rounded-xl px-6 py-4 font-semibold text-slate-700 mb-4">
        <h2>Account Number</h2>

        <h2 className="text-center">
          Currency
        </h2>

        <h2 className="text-right">
          Status
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {accountList.map(function (account,idx) {
          return (
            <AccountCard
              key={idx}
              account={account}
            />
          );
        })}
      </div>
      </>
      )}

    </div>
  )
}

export default AccountList;