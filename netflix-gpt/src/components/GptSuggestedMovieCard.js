const GptSuggestedMovieCard = ({
  Title,
  Actors,
  Poster,
  Plot,
  Director,
  Released,
  Writer,
  imdbID,
}) => {
  const visitMovieHandler = (id) => {
    const imdb_url = "https://www.imdb.com/title/" + id;
    console.log("visit movie btn clicked");
    // window.location.href = imdb_url;
  };

  return (
    <div className="gptSuggestedMovieCard p-4 m-2 bg-slate-900 rounded">
      <div className="img">
        {Poster && (
          <img
            className=" w-[50%] rounded-xl  mx-auto"
            src={Poster}
            alt={Title}
          />
        )}
      </div>
      <div className="movieInfo text-white flex flex-col justify-center text-center">
        <p className="text-xl font-bold p-2 m-1 text-red-500">{Title}</p>
        <p className="my-2">
          <span className="font-bold text-yellow-500">Actors : </span>
          {Actors}
        </p>
        <p className="my-2">
          <span className="font-bold text-yellow-500">Director : </span>
          {Director}
        </p>
        <p className="my-2">
          <span className="font-bold text-yellow-500">Writers : </span>
          {Writer}
        </p>
        <p className="my-2">
          <span className="font-bold text-yellow-500">Release Date : </span>
          {Released}
        </p>
      </div>
      <div className="movieVisitBtn">
        <button
          className="mt-4 rounded bg-yellow-400 text-slate-900 p-2 m-2 text-center w-full font-bold"
          onClick={visitMovieHandler(imdbID)}
        >
          Visit Movie Page
        </button>
      </div>
    </div>
  );
};
export default GptSuggestedMovieCard;
