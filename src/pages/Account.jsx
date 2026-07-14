import React, { useEffect, useState } from "react";
import Navbar from "../components/accounts/Navbar";
import AccountHeader from "../components/accounts/AccountHeader";
import SearchAccount from "../components/accounts/SearchAccount";
import AccountList from "../components/accounts/AccountList";
import QuickAction from "../components/accounts/QuickAction";
import api from "./api/axios";

const Account = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchUser();
  }, []);
  async function fetchUser() {
    const response = await api.get("/auth/me");
    setData(response.data);
  }
  return (
    <div>
      <Navbar user={data?.user} />
      <AccountHeader />
      <SearchAccount />
      <AccountList user={data?.user} />
      <QuickAction />
    </div>
  );
};

export default Account;
