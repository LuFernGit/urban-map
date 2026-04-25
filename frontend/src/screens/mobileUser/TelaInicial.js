import { View, StyleSheet } from "react-native";
import Logo from "../../components/Logo";
import PrimaryButton from "../../components/PrimaryButton";

export default function TelaInicial({ navigation }) {
  return (
      <View style={styles.container}>
        <Logo />

        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />

          <PrimaryButton
            title="Cadastre-se"
            variant="light"
            onPress={() => navigation.navigate("Cadastro")}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonsContainer: {
    width: "80%",
  },
});
