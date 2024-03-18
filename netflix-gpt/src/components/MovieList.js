import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="movieList md:m-4 px-4 md:px-8 md:mb-10">
      <h1 className="md:fon-medium text-lg md:text-2xl my-3 md:my-4 text-white">
        {title}
      </h1>
      <div
        className="list flex overflow-x-scroll -ml-3"
        style={{ scrollbarWidth: "none" }}
      >
        {movies?.map((each) => {
          return <MovieCard key={each?.id} movie={each} />;
        })}
      </div>
    </div>
  );
};
export default MovieList;
