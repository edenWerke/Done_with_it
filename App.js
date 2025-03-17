import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Specify number of lines */}
      <Text numberOfLines={2} onPress={handlePress}>
        Hello world! Thank God I am so happy today.
      </Text>
      {/* events on the touchable with out feed back */}

      <TouchableNativeFeedback
        onPress={() => {
          console.log("image Tapped");
        }}
      >
        <View style={{ width: 200, height: 70, backgroundColor: "pink" }}>
          {/* <Image
        blurRadius={5}
        fadeDuration={1000}
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image}
      /> */}
        </View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
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
