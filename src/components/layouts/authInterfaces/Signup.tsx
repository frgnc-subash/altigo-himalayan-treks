import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import signupBg from "../../../assets/backgrounds/signup.jpg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black font-sans py-10 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src={signupBg}
          alt="Signup Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-md p-6 md:p-8 bg-white/70 backdrop-blur-md border border-white/40 shadow-2xl shadow-black/20 rounded-3xl animate-fade-in-up">
        <div className="text-center mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black transition-colors mb-3 uppercase tracking-widest"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            Join the Tribe
          </h1>
          <p className="text-sm text-gray-600 font-medium">
            Create an account to save trips & get offers.
          </p>
        </div>

        <button className="w-full flex items-center justify-center gap-3 bg-white/60 border border-white/50 hover:bg-white hover:border-white py-2.5 rounded-xl transition-all duration-200 text-sm font-bold text-gray-700 shadow-sm mb-5">
          <FaGoogle className="text-red-500" /> Sign up with Google
        </button>

        <div className="relative mb-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/50"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-wider">
            <span className="bg-transparent px-2 text-gray-500">
              Or via email
            </span>
          </div>
        </div>

        <form className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1 ml-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Tenzing Norgay"
              className="w-full px-5 py-2.5 rounded-xl bg-white/50 border border-white/50 text-gray-900 font-medium placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#084EA8] focus:border-transparent transition-all shadow-inner"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="adventure@example.com"
              className="w-full px-5 py-2.5 rounded-xl bg-white/50 border border-white/50 text-gray-900 font-medium placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#084EA8] focus:border-transparent transition-all shadow-inner"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1 ml-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full pl-5 pr-12 py-2.5 rounded-xl bg-white/50 border border-white/50 text-gray-900 font-medium placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#084EA8] focus:border-transparent transition-all shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-1 ml-1">
            <input
              id="terms"
              type="checkbox"
              className="mt-1 w-4 h-4 text-[#084EA8] border-gray-300 rounded focus:ring-[#084EA8] cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-600 font-medium cursor-pointer leading-tight"
            >
              I agree to the{" "}
              <a href="#" className="underline hover:text-black">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-black">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button className="w-full bg-[#084EA8] text-white font-bold py-3 rounded-xl hover:bg-blue-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg mt-3">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-[#084EA8] hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
