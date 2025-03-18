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

export default function App() {
  console.log(Dimensions.get("screen"));
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    // the right side over
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* <Button
        color="orangered"
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "Are you sure?", [
            {
              text: "Yes",
              onPress: () => alert("You clicked yes"),
            },
            {
              text: "No",
              onPress: () => alert("You clicked no"),
            },
          ])
        }
      /> */}
      <View
        style={{ backgroundColor: "darkblue", width: "100%", height: "30%" }}
      ></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "yellow" };
//using the satus par in order to know the perfect padding
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
//LAYOUTS
