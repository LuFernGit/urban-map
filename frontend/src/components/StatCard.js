import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function StatCard({
  icon,
  color,
  number,
  label,
  IconComponent,
}) {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={[styles.iconCircle, { backgroundColor: color.bg }]}>
        <IconComponent name={icon} size={20} color={color.icon} />
      </View>

      <Text style={[styles.number, { color: colors.text }]}>
        {number}
      </Text>

      <Text style={[styles.label, { color: colors.placeholder }]}>
        {label}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
      borderColor: "#E5E7EB", 

  },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  number: {
    fontSize: 20,
    fontWeight: "700",
  },

  label: {
    fontSize: 13,
    marginTop: 4,
  },
});