import { MOVIE_POSTER_URL } from "../constants/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title } = movie;
  const moviePoster = MOVIE_POSTER_URL + poster_path;

  if (!poster_path) {
    return;
  }

  return (
    <>
      {moviePoster && (
        <img
          className="rounded m-2 md:m-3 w-[25%] md:w-auto"
          src={moviePoster}
          alt={original_title}
        />
      )}
    </>
  );
};
export default MovieCard;
