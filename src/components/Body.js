import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import useMoviesApi from "../hooks/useMoviesApi";
import useMovieSearch from "../hooks/useMovieSearch";
import MovieCard from "./MovieCard";

const Body = () => {
  const { movies: popularMovies, handleScroll, loading: popularLoading } =
    useMoviesApi();
  const [searchQuery, setSearchQuery] = useState("");
  const { movies: searchMovies, loading: searchLoading } = useMovieSearch(
    searchQuery
  );

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingBottom: 50 }]}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={{ backgroundColor: "#000" }}
    >
      <TextInput
        style={styles.searchInput}
        placeholder="Search Movies Here..."
        placeholderTextColor="#666"
        onChangeText={handleSearchChange}
        value={searchQuery}
      />
      {searchQuery && searchMovies.length === 0 && !searchLoading ? (
        <Text style={styles.noResultsText}>No movies found</Text>
      ) : (
        <View style={styles.row}>
          {searchQuery
            ? searchMovies?.map((movie) => (
                <View key={movie.id} style={styles.movieContainer}>
                  <MovieCard moviesList={movie} />
                </View>
              ))
            : popularMovies?.map((movie) => (
                <View key={movie.id} style={styles.movieContainer}>
                  <MovieCard moviesList={movie} />
                </View>
              ))}
        </View>
      )}
      {(searchLoading || popularLoading) && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  movieContainer: {
    width: "45%",
    marginBottom: 20,
    alignItems: "center"
  },
  loaderContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: "#fff",
  },
  noResultsText: {
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
});
export default Body;