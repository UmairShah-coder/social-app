import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUserFriends,
  FaFacebookMessenger,
  FaBell,
  FaUsers,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome />, badge: 0 },
    { to: "/friends", label: "Friends", icon: <FaUserFriends />, badge: 2 },
    { to: "/messages", label: "Messages", icon: <FaFacebookMessenger />, badge: 5 },
    { to: "/notifications", label: "Notifications", icon: <FaBell />, badge: 3 },
    { to: "/groups", label: "Groups", icon: <FaUsers />, badge: 0 },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 px-6 py-2 flex items-center justify-between">
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
      {/* LEFT */}
      <div className="flex items-center gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
           <img
            src="/logoo.png"
            alt="logo"
            className="w-9 h-9 rounded-lg"
          />
          <span className="text-2xl font-bold tracking-wide text-blue-600">
            Linkora
          </span>
        </div>

        {/* Search */}
        <div className="flex items-center bg-gray-100/80 px-4 py-2 rounded-full w-[260px] gap-2 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* CENTER */}
      <nav className="flex gap-4 items-center">
        {navLinks.map((link, i) => {
          const isActive = location.pathname === link.to;

          return (
            <Link
              key={i}
              to={link.to}
              className="relative flex flex-col items-center px-3 py-1 rounded-xl group"
            >
              <div
                className={`text-lg transition-all duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 group-hover:text-blue-500"
                }`}
              >
                {link.icon}
              </div>

              <span
                className={`text-[11px] transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 group-hover:text-blue-500"
                }`}
              >
                {link.label}
              </span>

              {/* Badge */}
              {link.badge > 0 && (
                <span className="absolute -top-1 right-1 text-[10px] bg-red-500 text-white px-1.5 rounded-full">
                  {link.badge}
                </span>
              )}

              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 w-5 h-[3px] bg-blue-600 rounded-full"
                />
              )}

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/5 transition" />
            </Link>
          );
        })}
      </nav>

      {/* RIGHT */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 focus:outline-none group"
        >
        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-blue-500 transition">
  <img
    src="/profile.png"
    className="w-full h-full object-cover object-top"
  />
</div>

          <FiChevronDown
            className={`transition duration-300 ${
              open ? "rotate-180 text-blue-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* DROPDOWN */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 top-14 w-64 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-200 overflow-hidden"
            >
              {/* User */}
              <div className="flex items-center gap-3 p-4 border-b">
                <div className="w-11 h-11 rounded-full overflow-hidden">
                  <img src="/profile.png" />
                </div>

                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    Syed Umair
                  </p>
                  <p className="text-xs text-gray-500">
                    View profile
                  </p>
                </div>
              </div>

              {/* Menu */}
              <div className="p-2">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                  <FiUser />
                  <span className="text-sm text-gray-700">
                    Profile Settings
                  </span>
                </div>

               <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer transition group">
      <FiLogOut className="group-hover:translate-x-1 transition" />
      <span className="text-sm">Logout</span>
    </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}