import React from "react";
import { Lightbulb } from "lucide-react";

const TipsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-100 p-3 rounded-full">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Banking Tips
          </h2>

          <p className="text-gray-500">
            Stay secure while managing your account.
          </p>
        </div>
      </div>

      <div className="space-y-4">

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-slate-700 leading-relaxed">
            ✅ Always verify the recipient account number before confirming a
            transfer.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-slate-700 leading-relaxed">
            🔒 Never share your transaction password with anyone.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-slate-700 leading-relaxed">
            📧 Check your email after every successful transaction for
            confirmation.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-slate-700 leading-relaxed">
            ⚠️ Log out after using your account on a shared or public device.
          </p>
        </div>

      </div>

    </div>
  );
};

export default TipsCard;