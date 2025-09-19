import React,  { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top container with message */}
      <div className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white text-center py-10 shadow">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p className="text-md mt-1">Log in to your DevByte account to join discussions and collaborate</p>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-white shadow rounded-xl px-8 py-5">
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="relative w-full">
                <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-950 to-blue-600  text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          {/* Social Auth */}
          <div className="my-8">
            <div className="flex items-center justify-center">
              <span className="border-t border-gray-300 w-full"></span>
              <span className="px-2 text-gray-400 text-sm">OR</span>
              <span className="border-t border-gray-300 w-full"></span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
                <FaGoogle className="text-red-500" size={22} />
            </button>

            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
                <FaGithub className="text-gray-800" size={22} />
            </button>

            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
                <FaLinkedin className="text-blue-600" size={22} />
            </button>

            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
                <FaXTwitter className="text-black" size={22} />
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-600 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login