const HeroVideoInfo = ({ title, overview }) => {
  return (
    <div className="py-[14rem] p-4 absolute top-[36%] translate-y-[-30%] pl-12 bg-gradient-to-r from-black to-transparent z-10">
      <h1 className="font-bold text-5xl mb-4 text-white">{title}</h1>
      <p className="w-1/2 text-white text-lg">{overview}</p>
      <div className="mt-4">
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
