import Header from "./Header";
import useGetMoviesLists from "../customHooks/useGetMoviesLists";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // hooks for fetching movie lists from api's and storing into redux store
  useGetMoviesLists();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
