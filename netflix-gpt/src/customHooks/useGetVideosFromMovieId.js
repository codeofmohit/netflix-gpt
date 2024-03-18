import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addHeroMovieTrailer } from "../store/slices/moviesSlice";
import { API_VIDEOS_FROM_ID, TMDB_API_OPTIONS } from "../constants/constants";

// importing hardcoded data
import { trailerVideo } from "../constants/hardCodedData";

const useGetVideosFromMovieId = (id) => {
  const dispatch = useDispatch();

  const isVideoAlreadyExistsInStore = useSelector(
    (state) => state.movies.trailerVideo
  );

  const video_api_url = `${API_VIDEOS_FROM_ID}/${id}/videos`;

  const dispatchHardCodedVideoFirst = () => {
    dispatch(addHeroMovieTrailer(trailerVideo));
  };

  const getVideosFromMovieId = async () => {
    try {
      const response = await fetch(video_api_url, TMDB_API_OPTIONS, {
        timeout: 5000,
      });
      const data = await response.json();
      // logic to filter trailer out of data
      const filteredTrailer = data?.results.find(
        (each) => each.type === "Trailer"
      );
      // in case trailer is not there, then using first of any returned clip
      const movieTrailer = filteredTrailer
        ? filteredTrailer
        : data?.results?.[0];
      // storing in redux store
      dispatch(addHeroMovieTrailer(movieTrailer));
    } catch (error) {
      console.log("error fetching trailer video api from tldb : " + error);
      dispatch(addHeroMovieTrailer(trailerVideo));
    }
  };

  useEffect(() => {
    if (!isVideoAlreadyExistsInStore) {
      dispatchHardCodedVideoFirst();
      getVideosFromMovieId();
    }
  }, []);
};
export default useGetVideosFromMovieId;
