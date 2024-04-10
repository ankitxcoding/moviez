import React from "react";
import { Image, Text, ScrollView, StyleSheet } from "react-native";
import { BASE_POSTER_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { moviesList } = props;
  const { title, poster_path } = moviesList;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: BASE_POSTER_URL + poster_path }}
      />
      <Text style={styles.text}>{title}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  image: {
    width: 165,
    aspectRatio: 2 / 3,
  },
  text: {
    color: "#fff",
    padding: 10,
    backgroundColor: "#E50914",
    flex: 1,
    alignSelf: "stretch",
  },
});
export default MovieCard;
