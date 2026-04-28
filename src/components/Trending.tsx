import { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovies = async (nextPage = 1, type = category) => {
    try {
      setLoading(true);

      let results: any[] = [];

      // 🎬 ALL (REAL MIX FIXED)
      if (type === "all") {
        const [trending, en, hi] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${nextPage}`),
          axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=en&page=${nextPage}`),
          axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi&page=${nextPage}`)
        ]);

        results = [
          ...trending.data.results,
          ...en.data.results,
          ...hi.data.results
        ];
      }

      // 🇺🇸 HOLLYWOOD
      else if (type === "hollywood") {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=en&page=${nextPage}`
        );
        results = res.data.results;
      }

      // 🇮🇳 BOLLYWOOD
      else if (type === "bollywood") {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi&page=${nextPage}`
        );
        results = res.data.results;
      }

      // 🎬 PUNJABI (IMPROVED)
      else if (type === "punjabi") {
        const [r1, r2] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=punjabi&page=${nextPage}`),
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=punjab&page=${nextPage}`)
        ]);

        results = [...r1.data.results, ...r2.data.results];
      }

      // ❌ REMOVE INVALID IMAGES
      results = results.filter((m: any) => m.poster_path);

      // 🔥 REMOVE DUPLICATES
      const unique = Array.from(
        new Map(results.map(m => [m.id, m])).values()
      );

      // 🔥 SORT BY POPULARITY
      unique.sort((a: any, b: any) => b.popularity - a.popularity);

      setMovies((prev) =>
        nextPage === 1 ? unique : [...prev, ...unique]
      );

    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // initial + category change
  useEffect(() => {
    setMovies([]);
    setPage(1);
    fetchMovies(1, category);
  }, [category]);

  // load more
  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage, category);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  return (
    <section className="w-full bg-black text-white py-12">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-red-600">
            Trending Movies
          </h2>
          <p className="text-zinc-500 text-sm">
            Explore the most popular movies right now
          </p>
        </div>

      <div className="relative w-fit">
  <select
    onChange={(e) => handleCategoryChange(e.target.value)}
    className="
      w-56
      bg-white/5 backdrop-blur-md
      text-white px-5 py-3 pr-12
      rounded-2xl
      border border-white/10
      shadow-[0_8px_30px_rgba(0,0,0,0.5)]
      hover:border-purple-500/40
      focus:outline-none focus:ring-2 focus:ring-purple-500/50
      transition-all duration-300
      appearance-none cursor-pointer
    "
  >
    <option value="all" className="bg-zinc-900">All</option>
    <option value="bollywood" className="bg-zinc-900">Bollywood</option>
    <option value="hollywood" className="bg-zinc-900">Hollywood</option>
    <option value="punjabi" className="bg-zinc-900">Punjabi</option>
  </select>

  {/* Premium Arrow */}
  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
      <span className="text-xs text-white">▼</span>
    </div>
  </div>
</div>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {movies.map((movie: any) => (
          <div
            key={movie.id}
            className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg"
          >

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="w-full h-[260px] object-cover"
            />

            <div className="p-3">
              <h3 className="text-sm font-semibold truncate">
                {movie.title || movie.name}
              </h3>

              <p className="text-xs text-zinc-400 mt-1">
                ⭐ {movie.vote_average}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-8">
        <button
          onClick={loadMore}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 transition-all px-6 py-2 rounded-full font-semibold"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>

    </section>
  );
};

export default Trending;