import { StatusBar } from "react-native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { colors } from "./src/constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>WORDLE</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  title: {
    color: colors.lightgrey,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },
});
