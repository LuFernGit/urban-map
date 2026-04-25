// screens/TelaLogin.js
import { View, Text, StyleSheet } from "react-native";

import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import AuthFooter from "../../components/AuthFooter";

export default function TelaLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.title}>Bem-vindo de volta!</Text>

      <InputField
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />
      <InputField placeholder="Digite sua senha" secureTextEntry />

      <PrimaryButton title="Login" onPress={() => console.log("login")} />

      <AuthFooter onPress={() => navigation.navigate("Cadastro")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
  },
  input: {
    color: "#000",
  },
});
