
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-zinc-800 pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
       <div>
  <h1 className="text-2xl font-bold  flex items-center gap-2">

    {/* LOGO */}
    <img 
      src="/lgo.png" 
      alt="Flixora Logo" 
      className="w-8 h-8 object-contain"
    />

    {/* TEXT */}
    <span>Flixora</span>

  </h1>

  <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
    Your ultimate destination for trending movies, Hollywood,
    Bollywood and Punjabi entertainment — all in one place.
  </p>
</div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold transition-all mb-4">Explore</h3>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Trending</li>
            <li className="hover:text-red-600 cursor-pointer">Hollywood</li>
            <li className="hover:text-red-600 cursor-pointer">Bollywood</li>
            <li className="hover:text-red-600 cursor-pointer">Punjabi</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="text-lg font-semibold transition-all mb-4">Support</h3>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="hover:text-red-600 cursor-pointer">Help Center</li>
            <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-red-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-600 cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          

          <p className="text-xs text-zinc-500 mt-6">
            © {new Date().getFullYear()} Flixora. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;