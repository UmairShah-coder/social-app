import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function LuxuryLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
const videoRef = useRef(null);
  return (
    <div className="h-screen w-full relative flex items-center justify-center  overflow-hidden">

      {/* 🎬 VIDEO BACKGROUND */}
      <video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  onLoadedData={() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1000; // 👈 slow speed (0.5 = half speed)
    }
  }}
  className="absolute w-full h-full object-cover"
>
  <source src="/vioo.mp4" type="video/mp4" />
</video>

      {/* FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* OVERLAY */}
      <div className="absolute inset-0 " />

      {/* GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-black blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-black blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative   z-10 w-full max-w-md p-10 rounded-3xl
       border border-white/10
        shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
      >
        {/* BRAND */}
     <div className="text-center mb-8 flex flex-col items-center gap-2">
  
  {/* LOGO + NAME (same row) */}
  <div className="flex items-center gap-3">
    <img src="/lgo.png" alt="logo" className="w-12 h-12 object-contain" />
    <h1 className="text-4xl font-extrabold text-red-600 tracking-widest">
      Flixora
    </h1>
  </div>

  {/* TAGLINE */}
  <p className="text-zinc-400 text-sm">
    Exclusive Access Portal
  </p>

</div>

        {/* EMAIL */}
        <div className="mb-5 relative">
          <Mail className="absolute left-3 top-3.5 text-zinc-400" size={18} />
          <input
            type="email"
            placeholder="Username or Email"
            className="w-full pl-10 pr-4 py-3 rounded-xl
          bg-white/10 text-white border border-zinc-700
            focus:border-red-500 focus:ring-2 focus:ring-red-500/30
            outline-none transition"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6 relative">
          <Lock className="absolute left-3 top-3.5 text-zinc-400" size={18} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-3 rounded-xl
bg-white/10 text-white border border-zinc-700
            focus:border-red-500 focus:ring-2 focus:ring-red-500/30
            outline-none transition"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-zinc-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-white
          bg-red-600 hover:bg-red-700
          hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          {loading ? "Entering..." : "Enter Account"}
          <LogIn size={18} />

        </button>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-zinc-700" />
          <span className="px-3 text-zinc-500 text-xs">OR</span>
          <div className="flex-1 h-px bg-zinc-700" />
        </div>

        {/* GOOGLE */}
      <button className="w-full py-3 rounded-xl bg-white  font-medium hover:bg-zinc-200 transition flex items-center justify-center gap-2 shadow-lg shadow-black/30">
  <img src="/google.png" className="w-10 h-10" />
  Continue with Google
</button>

        {/* FOOTER */}
        <p className="text-center text-zinc-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:underline">
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
}