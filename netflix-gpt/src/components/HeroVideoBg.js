import { useSelector } from "react-redux";
import useGetVideosFromMovieId from "../customHooks/useGetVideosFromMovieId";

const HeroVideoBg = ({ id }) => {
  // fetching movie's trailer from its id and storing into redux
  useGetVideosFromMovieId(id);

  // fetching out trailerkey from redux store
  const trailerKey = useSelector((state) => state.movies.trailerVideo?.key);

  return (
    <div>
      <iframe
        id="youtube-video"
        class="pointer-events-none aspect-video w-[100%]"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&rel=0&controls=0&showinfo=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
export default HeroVideoBg;
