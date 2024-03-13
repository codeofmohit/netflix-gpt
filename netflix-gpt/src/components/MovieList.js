import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="movieList m-4 px-8 mb-10">
      <h1 className="fon-medium text-2xl my-4 text-white">{title}</h1>
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
