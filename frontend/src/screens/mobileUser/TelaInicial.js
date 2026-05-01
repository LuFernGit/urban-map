import { View, StyleSheet } from "react-native";
import { useContext } from "react";

import Logo from "../../components/Logo";
import PrimaryButton from "../../components/PrimaryButton";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaInicial({ navigation }) {
    const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <View style={styles.content}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  buttonsContainer: {
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
});
