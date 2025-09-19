import React, {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Signup = () => {
    const [show, setShow] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top container with message */}
      <div className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white text-center py-10 shadow">
        <h2 className="text-3xl font-bold text-gradient-to-r from-blue-400 to-blue-800">Join DevByte</h2>
        <p className="text-md mt-1">Become a member of the global DevByte community</p>
      </div>

      {/* Signup Form */}
      <div className="flex-1 flex items-center justify-center px-4 mt-5">
        <div className="w-full max-w-2xl bg-white shadow rounded-xl px-8 py-5">
          <form className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

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

            <div className="relative w-full">
                <input
                    type={show ? "text" : "password"}
                    placeholder="Confirm Password"
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

            {/* <input
              type="text"
              placeholder="Your Skills"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /> */}

            <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded" />
                <span>I agree to the Community Guidelines</span>
            </label>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Social Auth */}
          <div className="my-4">
            <div className="flex items-center justify-center">
              <span className="border-t border-gray-300 w-full"></span>
              <span className="px-2 text-gray-400 text-sm">OR</span>
              <span className="border-t border-gray-300 w-full"></span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-4">
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
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup