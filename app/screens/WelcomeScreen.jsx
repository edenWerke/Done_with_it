import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.RegisterButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
  RegisterButton: {
    width: "100%",
    height: 70,
    backgroundColor: "dodgerblue",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10, // Space between logo and text
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold", // Makes the text bold
  },
});

export default WelcomeScreen;
