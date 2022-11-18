import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Slider from "./screen/Slider";

export default function App() {
  return (
    <>
      <Slider />
      <StatusBar style="auto" />
    </>
  );
}
