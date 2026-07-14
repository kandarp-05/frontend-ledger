import React, { useEffect, useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import NoBank from "../components/dashboard/NoBank";
import Bank from "../components/dashboard/Bank";
import api from "./api/axios";

const Dashboard = () => {
  const [isAccount, setIsAccount] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/auth/me");
        setData(response.data.user);
        const accountResponse = await api.get("/accounts");

        if (accountResponse.data.accounts.length > 0) {
          setIsAccount(true);
        } else {
          setIsAccount(false);
        }
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };

    fetchUser();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar user={data} />
      <WelcomeCard user={data} />
      {isAccount ? <Bank user={data} /> : <NoBank />}
    </div>
  );
};

export default Dashboard;
