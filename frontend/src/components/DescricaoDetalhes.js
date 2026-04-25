import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DescricaoDetalhes({ descricao }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Descrição:</Text>

      <Text style={styles.texto}>
        {descricao}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
    color: "#000",
  },
  texto: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
});