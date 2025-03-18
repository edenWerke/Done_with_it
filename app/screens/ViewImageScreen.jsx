import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.CloseIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image style={styles.image} source={require("../assets/cloth.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensures the entire image is visible
  },
  container: {
    backgroundColor: "pink",
    flex: 1,
  },
  CloseIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "dodgerblue",
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
