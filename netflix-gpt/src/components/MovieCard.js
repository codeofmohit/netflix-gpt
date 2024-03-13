import { MOVIE_POSTER_URL } from "../constants/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title } = movie;
  const moviePoster = MOVIE_POSTER_URL + poster_path;

  return (
    <>
      <img className="rounded m-3" src={moviePoster} alt={original_title} />
    </>
  );
};
export default MovieCard;
