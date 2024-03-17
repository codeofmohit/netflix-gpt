import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector((state) => state?.multiLang?.selectedLang);
  const textConstants = useSelector((state) => state?.multiLang?.textConstants);

  const gptSearchBarSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="p-4 bg-black rounded-xl absolute top-[30vh] left-[50vw] translate-x-[-50%] translate-y-[-30%] w-2/4 flex justify-between"
      onSubmit={gptSearchBarSubmitHandler}
    >
      <input
        className="p-2 text-black rounded mr-5 w-3/4"
        type="search"
        placeholder={
          textConstants && textConstants[selectedLang]?.searchBarTextContent
        }
      />
      <button type="submit" className="bg-red-700 text-white p-2 w-1/4 rounded">
        {textConstants && textConstants[selectedLang]?.searchBtnTextContent}
      </button>
    </form>
  );
};
export default GptSearchBar;
