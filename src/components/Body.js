import React from "react";
import { ScrollView, View, StyleSheet, ActivityIndicator } from "react-native";
import useMoviesApi from "../hooks/useMoviesApi";
import MovieCard from "./MovieCard";

const Body = () => {
  const { movies, handleScroll, loading } = useMoviesApi();

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingBottom: 50 }]}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={{ backgroundColor: "#000" }}
    >
      <View style={styles.row}>
        {movies.map((movie) => (
          <View key={movie.id} style={styles.movieContainer}>
            <MovieCard moviesList={movie} />
          </View>
        ))}
      </View>
      {loading && (
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
  },
  loaderContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
});
export default Body;
