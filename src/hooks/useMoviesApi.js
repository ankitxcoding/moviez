import { useEffect, useState } from "react";
import { MOVIES_BASE_API, OPTIONS } from "../utils/constants";

const useMoviesApi = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(`${MOVIES_BASE_API}popular?page=${page}`, OPTIONS);
      const json = await data.json();
      setMovies((prevMovies) => [...prevMovies, ...json.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 100;
    if (isCloseToBottom && !loading) {
      fetchData();
    }
  };

  return { movies, handleScroll, loading };
};
export default useMoviesApi;