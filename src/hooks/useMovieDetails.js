import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";
import { MOVIES_BASE_API } from "../utils/constants";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]); // Re-fetch data when movieId changes

  const fetchData = async () => {
    try {
      const data = await fetch(
        MOVIES_BASE_API + movieId + "?language=en-US",
        OPTIONS
      );
      const json = await data.json();
      setMovieDetails(json);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setMovieDetails(null);
    }
  };

  return movieDetails;
};

export default useMovieDetails;
