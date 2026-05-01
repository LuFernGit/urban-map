import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function TelaLoginAdminWeb() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={require("../../assets/ArteAdm.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.right}>
        <Text style={styles.loginTitle}>Login</Text>
        <Text style={styles.description}>Acesse sua conta para continuar</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" />
          <TextInput placeholder="seu@email.com" style={styles.inputIcon} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry
            style={styles.inputIcon}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.register}>
          Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  left: {
    flex: 1,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -250 }, { translateY: -125 }],
    alignItems: "center",
  },

  right: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#f5f5f5",
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },

  description: {
    color: "#666",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    height: 45,
  },

  inputIcon: {
    flex: 1,
    marginLeft: 10,
  },

  button: {
    backgroundColor: "#3BA6E0",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#999",
  },

  register: {
    marginTop: 10,
    textAlign: "center",
  },

  link: {
    color: "#3BA6E0",
  },
});