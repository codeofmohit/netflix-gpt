import { openai } from "../utils/openAiConfig";
import { gptQueryGenerator } from "../constants/constants";

const getMovieSuggestionsFromGPT = (searchString) => {
  // querying chat GPT with searchString
  const gptSearchCall = async (searchString) => {
    const specificQueryText = gptQueryGenerator(searchString);
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: specificQueryText }],
      model: "gpt-3.5-turbo",
    });
    if (!response) {
      console.log("error while querying gpt for recommendations");
      return;
    }
    const movieNamesArr = response?.choices[0]?.message?.content.split(",");
    return movieNamesArr;
  };
  return gptSearchCall(searchString);
};
export default getMovieSuggestionsFromGPT;
