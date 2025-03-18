// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
//using perfect dimensions
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "gold",

          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gray",

          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "pink",

          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",

          width: 100,
          height: 100,
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}

//LAYOUTS
