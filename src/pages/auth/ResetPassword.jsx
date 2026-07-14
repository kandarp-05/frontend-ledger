import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [border, setBorder] = useState("Black");
  const data = {
    password: password,
  };
  async function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Password does not matched");
    }
    const { token } = useParams();
    const response = await api.post(`/auth/reset-password/${token}`, data);
    toast.success(response.data.message);
    setPassword("");
    setConfirmPassword("");
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-cyan-900 to-slate-800 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 px-10 py-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-slate-800">
          Reset Login Password
        </h2>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label className="text-sm font-semibold text-gray-700">
            New Password
          </label>

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            type="password"
            placeholder="Enter new password"
            value={password}
            required
          />

          <label className="text-sm font-semibold text-gray-700">
            Confirm New Password
          </label>

          <input
            onChange={async (e) => {
              await setConfirmPassword(e.target.value);
              setBorder(password === confirmPassword ? "Green" : "Red");
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            style={{ color: `${border}` }}
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            required
          />

          <button
            className="mt-4 rounded-lg bg-cyan-700 py-3 font-semibold text-white transition duration-200 hover:bg-cyan-800"
            type="submit"
          >
            Reset Login Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
