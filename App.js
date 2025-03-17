import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
} from "react-native";
// import { Button } from "react-native-web";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orangered"
        title="click Me"
        onPress={() =>
          // Alert.alert("my Title", "Are you sure?", [
          //   {
          //     text: "Yes",
          //     onPress: () => alert("you clicked yes"),
          //   },
          //   {
          //     text: "No",
          //     onPress: () => alert("you clicked no"),
          //   },
          // ])
          Alert.prompt(
            " my title",
            "my message",
            (text) => () => alert("hello  world")
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});
