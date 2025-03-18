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
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
export default function App() {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
}

//LAYOUTS
