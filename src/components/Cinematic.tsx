import { useEffect, useState } from "react";
import axios from "axios";

const UltraMarquee = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      setMovies(res.data.results);
    };
    fetchMovies();
  }, []);

  // 🎯 3D tilt
  const handleMove = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
  };

  const reset = (e: any) => {
    e.currentTarget.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section className="w-full bg-black text-white py-20 overflow-hidden border-t border-zinc-800">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-red-600">
          Cinematic Showcase
        </h2>
        <p className="text-zinc-400 text-sm">
          Experience movies like never before
        </p>
      </div>

      <div className="relative">

        {/* EDGE BLUR */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

        {/* SLIDER */}
        <div className="flex gap-8 w-max animate-scroll">

          {[...movies, ...movies].map((movie, i) => (
            <div
              key={i}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              className="group perspective-[1000px] min-w-[220px] h-[320px] rounded-xl overflow-hidden relative transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full h-full object-cover"
              />

              {/* 🎥 FAKE VIDEO PREVIEW (overlay animation) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center animate-pulse">
                  ▶
                </div>

              </div>

              {/* TITLE */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                <p className="text-sm font-semibold truncate">
                  {movie.title}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
};

export default UltraMarquee;