import React from "react";
import { Image, View, StyleSheet, StatusBar } from "react-native";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: 80,
    paddingTop: StatusBar.currentHeight,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
export default Header;
