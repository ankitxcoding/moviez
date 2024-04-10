import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="black"
        translucent
        barStyle="light-content"
      />
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
