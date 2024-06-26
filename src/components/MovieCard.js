import React from "react";
import { Image, Text, Pressable, StyleSheet, View } from "react-native";
import { BASE_POSTER_URL } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const MovieCard = ({ moviesList }) => {
  const { title, poster_path, vote_average } = moviesList;
  const navigation = useNavigation();

  const handleMoviePress = () => {
    navigation.navigate("Details", { movie: moviesList });
  };

  const renderStars = () => {
    const rating = vote_average / 2;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Icon key={i} name="star" size={20} color="#FFD700" />);
      } else if (i - rating <= 0.5) {
        stars.push(
          <Icon key={i} name="star-half-o" size={20} color="#FFD700" />
        );
      } else {
        stars.push(<Icon key={i} name="star-o" size={20} color="#FFD700" />);
      }
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleMoviePress}>
        <Image
          style={styles.image}
          source={{ uri: BASE_POSTER_URL + poster_path }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.voteContainer}>
            {renderStars()}
            <Text style={styles.vote}>{vote_average.toFixed(1)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E50914",
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 3,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "stretch",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  voteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  vote: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
export default MovieCard;
