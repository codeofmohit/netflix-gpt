import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesLists = useSelector((state) => state.movies);

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    moviesLists;

  const moviesTitles = [
    "Now Playing Movies",
    "Popular Movies",
    "Top Rated Movies",
    "Upcoming Movies",
  ];

  return (
    <div className="movie-lists-container bg-slate-900 pt-2 md:pt-[unset] md:-mt-36">
      <MovieList title={moviesTitles[3]} movies={upcomingMovies} />
      <MovieList title={moviesTitles[1]} movies={popularMovies} />
      <MovieList title={moviesTitles[2]} movies={topRatedMovies} />
      <MovieList title={moviesTitles[0]} movies={nowPlayingMovies} />
    </div>
  );
};
export default SecondaryContainer;
