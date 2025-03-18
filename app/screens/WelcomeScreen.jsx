import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.jpg")} />
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
    position: "absolute",
    top: 70,
  },
});
export default WelcomeScreen;
