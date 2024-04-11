import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { BASE_BACKDROP_URL, BASE_POSTER_URL } from "../utils/constants";

const MovieDetails = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: BASE_BACKDROP_URL + movie.backdrop_path }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={[styles.overview, {textAlign: 'justify'}]}>{movie.overview}</Text>
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
    width: '100%',
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
    textAlign: 'justify',
  },
});
export default MovieDetails;
