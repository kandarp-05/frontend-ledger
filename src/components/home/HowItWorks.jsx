import { ArrowDown } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 py-24 px-6 flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
        How It Works?
      </h2>

      <div className="flex flex-col items-center gap-6">

        <div className="bg-white w-80 rounded-xl shadow-xl px-8 py-5 text-center">
          <h2 className="text-xl font-semibold text-slate-800">
            Create an Account
          </h2>
        </div>

        <ArrowDown className="text-cyan-400 h-8 w-8" />

        <div className="bg-white w-80 rounded-xl shadow-xl px-8 py-5 text-center">
          <h2 className="text-xl font-semibold text-slate-800">
            Login Securely
          </h2>
        </div>

        <ArrowDown className="text-cyan-400 h-8 w-8" />

        <div className="bg-white w-80 rounded-xl shadow-xl px-8 py-5 text-center">
          <h2 className="text-xl font-semibold text-slate-800">
            Track & Manage Your Transactions
          </h2>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;