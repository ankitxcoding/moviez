import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";
import { MOVIES_BASE_API } from "../utils/constants";

const useMovieCredits = (movieId) => {
  const [movieCredit, setMovieCredit] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(MOVIES_BASE_API + movieId + "/credits", OPTIONS);
    const json = await data.json();
    setMovieCredit(json.cast);
  };
  return movieCredit;
};
export default useMovieCredits;