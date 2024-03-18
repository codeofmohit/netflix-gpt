const HeroVideoInfo = ({ title, overview }) => {
  const trimmedOverView =
    overview.length > 200 ? overview.substr(0, 150) : overview;

  return (
    <div className="pt-32 md:pt-[14rem] pb-40 md:pb-[14rem] p-4 absolute top-[25%] md:top-[36%] translate-y-[-30%] md:pl-12 bg-gradient-to-r from-black to-transparent z-10">
      <h1 className="font-bold text-xl md:text-5xl mb-2 md:mb-4 text-white">
        {title}
      </h1>
      <p className="md:w-1/2 text-white text-sm md:text-lg">
        {trimmedOverView}.
      </p>
      <div className="mt-4 hidden md:block">
        <button className="mr-4 text-slate-800 bg-white rounded py-2 px-8 text-lg font-medium">
          ▶️&nbsp; Play
        </button>
        <button className="mr-4 text-slate-800 bg-white rounded py-2 px-8 text-lg font-medium">
          More Info
        </button>
      </div>
    </div>
  );
};
export default HeroVideoInfo;
