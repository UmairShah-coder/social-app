import { Link } from "react-router-dom";

const MovieCard = ({ movie }: any) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-900 text-white p-2 rounded">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <h3 className="mt-2 text-sm">{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;