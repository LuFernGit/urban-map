import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ScrollToTopButton({ visible, onPress }) {
  if (!visible) return null;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Feather name="arrow-up" size={24} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 70,
    right: 15,
    backgroundColor: "#dbdbdbf0",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
});