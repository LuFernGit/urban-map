import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaCadastroSucesso({ navigation }) {
  const { colors } = useContext(ThemeContext);
  const [contador, setContador] = useState(3);

  useEffect(() => {
    if (contador === 0) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      return;
    }

    const timer = setTimeout(() => {
      setContador((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [contador, navigation]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require("../../assets/sucesso.png")}
        style={styles.imagemSucesso}
        resizeMode="contain"
      />

      <Text style={[styles.title, { color: colors.text }]}>
        Cadastro realizado
      </Text>

      <Text style={[styles.subtitle, { color: colors.text }]}>
        Seu cadastro foi realizado com sucesso
      </Text>

      <Text style={[styles.info, { color: colors.placeholder }]}>
        Redirecionando em {contador}...
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  imagemSucesso: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
  },

  info: {
    fontSize: 13,
    marginTop: 10,
    textAlign: "center",
  },
});
