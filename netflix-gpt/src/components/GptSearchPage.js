import LOGIN_BG from "../constants/codeofmohit_bg.jpeg";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchPage = () => {
  return (
    <>
      <img className="fixed" src={LOGIN_BG} alt="background" />
      <div className="gptPageContent z-40 w-full relative">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};
export default GptSearchPage;
