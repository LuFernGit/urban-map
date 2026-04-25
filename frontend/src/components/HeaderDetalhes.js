import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderDetalhes({ title, onBack }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onBack} style={styles.side}>
        <Ionicons name="chevron-back" size={28} color="#000" />
      </TouchableOpacity>

      <View style={styles.center}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>

      <View style={styles.side} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    height: 70,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  side: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  center: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});