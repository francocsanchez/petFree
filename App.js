import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.titleAdop]}>Adop</Text>
        <Text style={[styles.title, styles.titleTio, styles.titleTioHighlight]}>
          Tio
        </Text>
      </View>
      <Image
        source={require("./assets/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title="Iniciar Sesión" onPress={handleLogin} color="#000" />
        <View style={styles.horizontalLine}></View>
        <TouchableOpacity>
          <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Registrarte</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#539fa2",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    textTransform: "uppercase",
  },
  titleAdop: {
    color: "#333",
    fontWeight: "300",
  },
  titleTio: {
    color: "#666",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#72b1a4",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: "#fff",
  },
  horizontalLine: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  linkText: {
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
});
