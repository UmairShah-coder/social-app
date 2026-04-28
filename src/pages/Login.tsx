import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">

      {/* BACKGROUND IMAGE */}
      <img
        src="/login-bg.jpg"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* CARD */}
      <div className="relative w-[380px] p-8 rounded-2xl 
      bg-black/60 backdrop-blur-xl border border-red-600/30 shadow-2xl">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-3 rounded-lg bg-zinc-900 text-white outline-none border border-zinc-700 focus:border-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 px-4 py-3 rounded-lg bg-zinc-900 text-white outline-none border border-zinc-700 focus:border-red-600"
        />

        <button className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold">
          Login
        </button>

        <p className="text-xs text-zinc-400 text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-red-500 cursor-pointer">
            Sign up
          </span>
        </p>

        {/* BACK TO HOME */}
        <Link
          to="/"
          className="block text-center text-zinc-400 mt-4 text-sm hover:text-white"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
};

export default Login;