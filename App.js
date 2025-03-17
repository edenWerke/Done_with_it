import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
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
      <Button title="click Me" onPress={() => alert("hello world")} />
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
