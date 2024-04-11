import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BASE_POSTER_URL } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

const MovieCard = (props) => {
  const { moviesList } = props;
  const { title, poster_path, vote_average } = moviesList;
  const navigation = useNavigation();

  const handleMoviePress = () => {
    navigation.navigate("Details", { movie: moviesList });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleMoviePress}>
      <Image
        style={styles.image}
        source={{ uri: BASE_POSTER_URL + poster_path }}
      />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.vote}>
        {vote_average === 0 ? (
          <span className="text-white">NR</span>
        ) : (
          vote_average && vote_average.toFixed(1)
        )}
      </Text>
    </TouchableOpacity>
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#E50914",
    flex: 1,
    alignSelf: "stretch",
  },
  vote: {
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#E50914",
    flex: 1,
    alignSelf: "stretch",
  },
});
export default MovieCard;
