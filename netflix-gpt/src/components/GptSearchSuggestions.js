import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const movieSuggestions = useSelector(
    (state) => state.gptSearch?.movieResults
  );
  const listTitles = useSelector((state) => state.gptSearch?.movieNames);

  if (!movieSuggestions) {
    return (
      <div className="absolute top-[22vh] md:top-[40vh] bg-[rgba(0,0,0,0.6)] m-0 md:m-8 mt-8 md:mt-[unset] rounded text-white ">
        <h1 className="p-8">
          Your're likely on a JIO network, in this feature we make use of TMDB
          api(s) which are not stable on jio, try switching your network or
          connect via a VPN such as VeePN Chrome extension, Thanks!
        </h1>
      </div>
    );
  }

  return (
    <div className="absolute top-[22vh] md:top-[40vh] bg-[rgba(0,0,0,0.6)] m-0 md:m-8 mt-8 md:mt-[unset] rounded">
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
