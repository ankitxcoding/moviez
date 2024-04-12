import { useState, useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useMovieSearch = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const encodedQuery = encodeURIComponent(query);
        const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=en-US&page=1`;
        const response = await fetch(searchUrl, OPTIONS);
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [query]);

  return { movies, loading };
};
export default useMovieSearch;
