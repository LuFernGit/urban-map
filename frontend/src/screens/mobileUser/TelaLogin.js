import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import AuthFooter from "../../components/AuthFooter";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaLogin({ navigation }) {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Logo />

      <Text style={[styles.title, { color: colors.text }]}>
        Bem-vindo de volta!
      </Text>
      <View style={styles.form}>
        <View style={styles.input}>
          <InputField
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
          />
          <InputField placeholder="Digite sua senha" secureTextEntry />
        </View>

        <PrimaryButton title="Login" onPress={() => console.log("login")} />
      </View>
      <AuthFooter onPress={() => navigation.navigate("Cadastro")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    width: "100%",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    maxWidth: 300,
  },

  form: {
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
});
