import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <ShieldAlert className="h-20 w-20 text-cyan-700" />
        </div>

        <h1 className="text-7xl font-extrabold text-slate-800">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-700">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-500 leading-7">
          The page you're looking for doesn't exist or may have been moved. You
          can safely return to the homepage.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-200 active:scale-95"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
