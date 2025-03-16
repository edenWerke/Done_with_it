import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* specfiy number of lines */}
      <Text numberOfLines={2} onPress={handlePress}>
        Hello world! thank God i am so happy today
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
