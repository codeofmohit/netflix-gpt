import { useSelector } from "react-redux";

import HeroVideoBg from "./HeroVideoBg";
import HeroVideoInfo from "./HeroVideoInfo";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);

  // early return if movies are not loaded
  if (!movies) return;

  // fisrt movie === hero movie
  const heroMovie = movies[0];
  const { original_title, overview, id } = heroMovie;

  return (
    <div>
      <HeroVideoBg id={id} />
      <HeroVideoInfo title={original_title} overview={overview} />
    </div>
  );
};
export default MainContainer;
