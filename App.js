import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>Hola Coder!</Text>
      <View style={styles.containerBox}>
        <Text style={styles.boxTxt}>@francocsanchez</Text>
      </View>
      <Text>Red social para adopcion de mascotas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTxt: {
    fontSize: 30,
  },
  containerBox: {
    marginVertical: 10,
    backgroundColor: "#917081",
    borderRadius: 10,
  },
  boxTxt: {
    color: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 8,
    fontWeight: "bold",
  },
});
