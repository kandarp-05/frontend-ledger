import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";
/**
 *
 *    -----> Email, Password -> Login
 */
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const response = await api.post("/auth/login", data);
      toast.success(response.data.message);
      setPassword("");
      setEmail("");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-cyan-900 to-slate-800 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 px-10 py-12 flex flex-col items-center gap-6">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute top-4 right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>

        <form
          className="w-full flex flex-col gap-5"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            type="email"
            placeholder="rio@gmail.com"
            value={email}
            required
          />

          <label className="text-sm font-semibold text-gray-700">
            Password
          </label>

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition duration-200 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200"
            type="password"
            placeholder="Enter password"
            value={password}
            required
          />

          <button
            className="mt-4 rounded-lg bg-cyan-700 py-3 font-semibold text-white transition duration-200 hover:bg-cyan-800"
            type="submit"
          >
            Login
          </button>
        </form>

        <button
          onClick={() => {
            navigate("/register");
          }}
          className="text-sm font-medium text-cyan-700 hover:text-cyan-900"
        >
          Don't have an account? Sign Up
        </button>

        <button
          onClick={() => {
            navigate("/forgot-password");
          }}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default Login;
