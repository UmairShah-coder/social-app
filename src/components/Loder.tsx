const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">

      {/* 🌌 Animated background grid glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.25)_0,_transparent_60%)] animate-pulse"></div>
      </div>

      {/* ⚡ Floating blur orbs */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[120px] animate-[spin_12s_linear_infinite]"></div>
      <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px] animate-[spin_18s_linear_infinite_reverse]"></div>

      {/* 🎬 MAIN CONTENT */}
      <div className="relative text-center">

        {/* 🔥 LOGO (glitch + glow effect) */}
        <h1 className="text-7xl font-extrabold tracking-[0.5em] text-white relative">

          <span className="absolute text-red-600 blur-md animate-pulse">
            Flixora
          </span>

          <span className="relative text-white animate-flicker">
            Flixora
          </span>

        </h1>

        {/* ✨ SUB TEXT */}
        <p className="text-zinc-400 text-sm mt-4 tracking-[0.3em] animate-fade">
          ENTERING CINEMATIC UNIVERSE
        </p>

        {/* ⚡ ENERGY LOADER */}
        <div className="mt-10 flex gap-1 justify-center">

          <span className="w-2 h-8 bg-red-600 animate-bounce"></span>
          <span className="w-2 h-10 bg-red-500 animate-bounce delay-100"></span>
          <span className="w-2 h-6 bg-red-700 animate-bounce delay-200"></span>
          <span className="w-2 h-12 bg-red-600 animate-bounce delay-300"></span>
          <span className="w-2 h-7 bg-red-500 animate-bounce delay-150"></span>

        </div>

      </div>

      {/* 🎨 ANIMATIONS */}
      <style>{`
        /* text fade */
        .animate-fade {
          animation: fade 2s ease-in-out infinite;
        }

        @keyframes fade {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        /* glitch flicker effect */
        .animate-flicker {
          animation: flicker 1.5s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; transform: translateX(0); }
          50% { opacity: 0.6; transform: translateX(2px); }
        }
      `}</style>

    </div>
  );
};

export default Loader;