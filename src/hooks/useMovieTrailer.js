import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";
import { MOVIES_BASE_API } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const [movieTrailer, setMovieTrailer] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(MOVIES_BASE_API + movieId + "/videos", OPTIONS);
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailerKeys = trailers[0]?.key;
    setMovieTrailer(trailerKeys);
  };
  return movieTrailer;
};
export default useMovieTrailer;