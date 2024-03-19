import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const movieSuggestions = useSelector(
    (state) => state.gptSearch?.movieResults
  );
  const listTitles = useSelector((state) => state.gptSearch?.movieNames);

  return (
    <div className="top-[22vh] translate-y-52 md:translate-y-80 md:top-[40vh] bg-[rgba(0,0,0,0.6)] m-0 md:m-8 mt-8 md:mt-[unset] rounded py-2">
      {movieSuggestions ? (
        listTitles.map((each, index) => {
          return (
            <MovieList
              key={each}
              title={each}
              movies={movieSuggestions[index]?.results}
            />
          );
        })
      ) : (
        <div className="text-white text-center p-4">
          <h1 className="text-xl p-1 font-bold">Do try Searching First! </h1>
          <h2 className="font-bold underline">
            In case search does't work. read below ⤵️
          </h2>
          <p className="text-center py-2">
            Hi There! it seems like you're on JIO network, in this search
            feature, we are making use of TMDB api(s), which are highly unstable
            on JIO network. Please do change your network or try connecting via
            a VPN, such as VeePN. Thanks!
          </p>
        </div>
      )}
    </div>
  );
};
export default GptSearchSuggestions;
