import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loder"; // ✅ IMPORT

const Home = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // loader off
      }
    };

    fetchMovies();
  }, []);

  // ✅ SHOW LOADER
  if (loading) {
    return <Loader />;
  }

  return (
  <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 bg-black">
      {movies.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;