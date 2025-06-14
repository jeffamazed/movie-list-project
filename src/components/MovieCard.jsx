import "../css/MovieCard.css";
import useMovieContext from "../contexts/useMovieContext.js";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteclick(e) {
    e.preventDefault();

    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card" tabIndex="0">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            type="button"
            className={`favorite-btn${favorite ? " active" : ""}`}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            onClick={onFavoriteclick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          {movie.release_date ? movie.release_date.split("-")[0] : "Unknown"}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
