import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 6;

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
          return 100;
        }

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 18 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0f17]"
    >

      {/* 🌌 SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
        <div className="absolute w-[500px] h-[500px] bg-[#746e30]/20 blur-[120px] top-1/4 left-1/4 rounded-full" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] bottom-1/4 right-1/4 rounded-full" />
      </div>

      {/* ✨ FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 💎 MAIN CARD */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-[340px] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl"
      >

        {/* 🔵 LOGO AREA (NO SPIN CHAOS, SMOOTH FLOAT) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-20 h-20 mx-auto rounded-2xl bg-white/10 flex items-center justify-center border border-white/10"
        >
          <img src="/logoo.png" className="w-10 h-10" />
        </motion.div>

        {/* TITLE */}
        <h1 className="text-white text-lg font-semibold mt-5">
          Loading Linkora
        </h1>

      

        {/* PROGRESS BAR */}
        <div className="w-full h-2 bg-white/10 rounded-full mt-5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-700"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          {Math.floor(progress)}%
        </p>

        {/* LOADING DOTS */}
        <div className="flex justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

      </motion.div>
    </motion.div>
  );
}