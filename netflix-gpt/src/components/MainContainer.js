import { useSelector } from "react-redux";

import HeroVideoBg from "./HeroVideoBg";
import HeroVideoInfo from "./HeroVideoInfo";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  const trailerKey = useSelector((state) => state.movies.trailerVideo?.key);

  // early return if movies are not loaded
  if (!movies) return;

  const filteredArgyleMovie = movies?.find((each) => {
    return each.title === "Argylle";
  });

  // fisrt movie === hero movie
  const heroMovie = filteredArgyleMovie ? filteredArgyleMovie : movies[0];

  const { original_title, overview, id } = heroMovie;

  return (
    <div>
      <HeroVideoBg id={id} />
      <HeroVideoInfo
        title={original_title}
        overview={overview}
        ytKey={trailerKey}
      />
    </div>
  );
};
export default MainContainer;
