import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { BASE_BACKDROP_URL } from "../utils/constants";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetails = ({ route }) => {
  const { movie } = route.params;
  const movieId = movie.id;
  const movieDetails = useMovieDetails(movieId);

  if (!movieDetails) {
    return <Text>Loading...</Text>;
  }

  const {title, backdrop_path, overview}=movieDetails

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: BASE_BACKDROP_URL + backdrop_path }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.overview, { textAlign: "justify" }]}>
        {overview}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 2,
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  overview: {
    fontSize: 10,
    color: "#d1d5db",
    paddingHorizontal: 20,
    textAlign: "justify",
  },
});
export default MovieDetails;
