import { useSelector } from "react-redux";
import MovieList from "./MovieList";
// import GptSuggestedMovieCard from "./GptSuggestedMovieCard";

const GptSearchSuggestions = () => {
  const movieSuggestions = useSelector(
    (state) => state.gptSearch?.movieResults
  );
  const listTitles = useSelector((state) => state.gptSearch?.movieNames);

  // const gptSuggestedMoviesFromOMDB = useSelector(
  //   (state) => state.gptSearch.movieResults
  // );

  // console.log(gptSuggestedMoviesFromOMDB);

  // if (!gptSuggestedMoviesFromOMDB) {
  //   return;
  // }

  return (
    <div className="absolute top-[22vh] md:top-[40vh] bg-[rgba(0,0,0,0.6)] m-0 md:m-8 mt-8 md:mt-[unset] rounded">
      {/* <div className="movieCardsContainer flex">
        {gptSuggestedMoviesFromOMDB.map((each) => {
          const {
            Title,
            Actors,
            Poster,
            Plot,
            Director,
            Released,
            Writer,
            imdbID,
          } = each;
          return (
            <GptSuggestedMovieCard
              key={imdbID}
              Title={Title}
              Actors={Actors}
              Poster={Poster}
              Plot={Plot}
              Director={Director}
              Released={Released}
              Writer={Writer}
              imdbID={imdbID}
            />
          );
        })}
      </div> */}

      {movieSuggestions &&
        listTitles.map((each, index) => {
          return (
            <MovieList
              key={each}
              title={each}
              movies={movieSuggestions[index]?.results}
            />
          );
        })}
    </div>
  );
};
export default GptSearchSuggestions;
