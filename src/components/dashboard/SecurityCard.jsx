import React from "react";
import { Check } from "lucide-react";

const SecurityCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Security Status
        </h2>

        <p className="text-gray-500 mt-2">
          Your account is currently protected with the following security features.
        </p>
      </div>

      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-4 p-3 rounded-xl bg-green-50">
          <div className="bg-green-500 p-2 rounded-full">
            <Check className="w-4 h-4 text-white" />
          </div>

          <span className="font-medium text-slate-700">
            Login Protected
          </span>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-xl bg-green-50">
          <div className="bg-green-500 p-2 rounded-full">
            <Check className="w-4 h-4 text-white" />
          </div>

          <span className="font-medium text-slate-700">
            Transaction Password Enabled
          </span>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-xl bg-green-50">
          <div className="bg-green-500 p-2 rounded-full">
            <Check className="w-4 h-4 text-white" />
          </div>

          <span className="font-medium text-slate-700">
            Redis Session Active
          </span>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-xl bg-green-50">
          <div className="bg-green-500 p-2 rounded-full">
            <Check className="w-4 h-4 text-white" />
          </div>

          <span className="font-medium text-slate-700">
            JWT Authenticated
          </span>
        </div>

      </div>

    </div>
  );
};

export default SecurityCard;