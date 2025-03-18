import React from "react";
import { ImageBackground, StyleSheet, View, SafeView } from "react-native";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Background.jpg")}
    >
      <View style={styles.loginButton}></View>
      <View style={styles.RegisterButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
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
});
export default WelcomeScreen;
