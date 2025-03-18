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
    <View style={{ backgroundColor: "pink", flex: 1 }}>
      <View style={{ backgroundColor: "gold", flex: 2 }} />
      <View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
    </View>
  );
}

//LAYOUTS
