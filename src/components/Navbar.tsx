import { Search, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();

  return (
    <nav className="w-full bg-black border-b border-red-950/40">
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔴 LEFT: LOGO */}
      <div className="flex items-center gap-3">

  {/* Logo Image */}
  <img
    src="/lgo.png"
    alt="Flixora Logo"
    className="w-10 h-10 object-contain"
  />

  {/* Brand Name */}
  <span className="text-white text-xl font-semibold tracking-wide">
    Flixora
  </span>

</div>

        {/* 🔥 CENTER: BRAND TAGLINE (NO LINKS) */}
        <div className="hidden md:flex">
          <span className="text-zinc-500 text-sm tracking-widest uppercase">
            Discover • Watch • Explore
          </span>
        </div>

        {/* 🔍 RIGHT: PREMIUM SEARCH BAR */}
        <div className="flex items-center bg-zinc-900/70 border border-red-950/40 rounded-full px-4 py-2 w-44 sm:w-64 backdrop-blur-md shadow-lg shadow-black/40">

          <Search size={18} className="text-red-500" />

          <input
            type="text"
            placeholder="Search movies..."
            className="bg-transparent outline-none text-white ml-2 w-full placeholder:text-zinc-600 text-sm"
          />

        </div>
  <button
          onClick={() => navigate("/login")}
          className="ml-3 w-10 h-10 flex items-center justify-center 
          rounded-full bg-red-600 hover:bg-red-700 transition"
        >
          <Lock size={18} className="text-white" />
        </button>

      </div>
      

    </nav>
  );
};

export default Navbar;