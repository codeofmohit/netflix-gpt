import { YOUTUBE_TRAILER_URL } from "../constants/constants";

const HeroVideoInfo = ({ title, overview, ytKey }) => {
  // trimmer overview length if more then 200, in that too if on mobile reducing further down
  const trimmedOverView =
    overview.length > 200
      ? window.innerWidth < 768
        ? overview.substr(0, 100)
        : overview.substr(0, 150)
      : overview;

  const playTrailerBtnHandler = () => {
    const youtubeTrailUrl = YOUTUBE_TRAILER_URL + ytKey;
    window.open(youtubeTrailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-32 md:pt-[14rem] pb-40 md:pb-[14rem] p-4 absolute top-[22%] md:top-[36%] translate-y-[-30%] md:pl-12 bg-gradient-to-r from-black to-transparent z-10">
      <h1 className="font-bold text-xl md:text-5xl mb-2 md:mb-4 text-white">
        {title}
      </h1>
      <p className="md:w-1/2 text-white text-sm md:text-lg">
        {trimmedOverView}.
      </p>
      <div className="mt-4 md:block">
        <button
          className="mr-4 text-slate-800 bg-white rounded py-1 md:py-2 px-2 md:px-3 font-bold md:font-medium text-sm md:text-base"
          onClick={playTrailerBtnHandler}
        >
          ▶️&nbsp; Play Trailer on YT
        </button>
      </div>
    </div>
  );
};
export default HeroVideoInfo;
