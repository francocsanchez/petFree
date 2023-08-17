import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function App() {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerTxt}>Hola Coder!</Text>
      <View style={styles.containerBox}>
        <Text style={styles.boxTxt}>Franco Sanchez</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.cell, styles.instagramCell]}
            onPress={() =>
              handleLinkPress("https://www.instagram.com/francocsanchez")
            }
          >
            <Text style={styles.cellText}>Instagram</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.cell, styles.twitterCell]}
            onPress={() =>
              handleLinkPress("https://twitter.com/francocsanchez")
            }
          >
            <Text style={styles.cellText}>Twitter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.cell, styles.linkedinCell]}
            onPress={() =>
              handleLinkPress("https://www.linkedin.com/in/francocsanchez/")
            }
          >
            <Text style={styles.cellText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.cell, styles.githubCell]}
            onPress={() =>
              handleLinkPress("https://github.com/francocsanchez/")
            }
          >
            <Text style={styles.cellText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 10,
  },
  containerBox: {
    marginBottom: 20,
  },
  boxTxt: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  table: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
  },
  instagramCell: {
    backgroundColor: "#E4405F",
  },
  twitterCell: {
    backgroundColor: "#1DA1F2",
  },
  linkedinCell: {
    backgroundColor: "#0A66C2",
  },
  githubCell: {
    backgroundColor: "#333",
  },
});
