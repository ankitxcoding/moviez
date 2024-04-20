import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  BASE_BACKDROP_URL,
  BASE_POSTER_URL,
  IMDB_URL,
  YOUTUBE_URL,
} from "../utils/constants";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useMovieCredits from "../hooks/useMovieCredits";

const MovieDetails = ({ route }) => {
  const { movie } = route.params;
  const movieId = movie.id;
  const movieDetails = useMovieDetails(movieId);
  const movieTrailer = useMovieTrailer(movieId);
  const movieCredit = useMovieCredits(movieId);

  if (!movieDetails) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const {
    title,
    backdrop_path,
    overview,
    vote_average,
    imdb_id,
    tagline,
    release_date,
    runtime,
    status,
  } = movieDetails;

  const openIMDb = () => {
    if (imdb_id) {
      Linking.openURL(IMDB_URL + imdb_id);
    }
  };

  const openYoutube = () => {
    if (movieTrailer) {
      Linking.openURL(YOUTUBE_URL + movieTrailer);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: BASE_BACKDROP_URL + backdrop_path }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tagline}>({tagline === "" ? "NA" : tagline})</Text>
      <Text style={[styles.overview, { textAlign: "justify" }]}>
        {overview}
      </Text>
      <Text style={styles.tagline}>
        Release Date - {release_date} · Duration - {runtime} Minutes
      </Text>
      <Text style={styles.tagline}>Release Status - ({status})</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openIMDb}>
          <Icon name="imdb" size={20} color="yellow" />
          <Text style={styles.buttonText}>
            {vote_average === 0 ? (
              <span className="text-white">NR</span>
            ) : (
              vote_average && vote_average.toFixed(1)
            )}
            /10
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openYoutube}>
          <Icon name="youtube-play" size={20} color="red" />
          <Text style={styles.buttonText}>Watch Trailer</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.castContainer}>
        {movieCredit.map((cast) => (
          <View key={cast.id} style={styles.castItem}>
            {cast.profile_path ? (
              <Image
                style={styles.castImage}
                source={{ uri: BASE_POSTER_URL + cast.profile_path }}
              />
            ) : (
              <Icon name="user" size={120} color="#a8a29e" />
            )}
            <Text style={styles.castName}>{cast.name}</Text>
            <Text style={styles.characterName}>{cast.character}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    paddingVertical: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 2,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  overview: {
    fontSize: 10,
    color: "#fff",
    paddingHorizontal: 20,
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },
  tagline: {
    fontSize: 10,
    color: "#a8a29e",
    textAlign: "center",
  },
  castContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  castItem: {
    width: 100,
    marginRight: 10,
    alignItems: "center",
  },
  castImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: "cover",
  },
  castName: {
    color: "#fff",
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  characterName: {
    color: "#a8a29e",
    marginTop: 2,
    textAlign: "center",
  },
});
export default MovieDetails;
