import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

export default function ActionItem({ iconType, label, onPress }) {
  const { colors } = useContext(ThemeContext);
  const renderIcon = () => {
    switch (iconType) {
      case "tag":
        return <FontAwesome6 name="tag" size={18} color={colors.text} />;

      case "person":
        return (
          <Ionicons name="person-add" size={20} color={colors.text} />
        );

      case "location":
        return (
          <MaterialIcons name="location-on" size={20} color={colors.text} />
        );

      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.left}>
        {renderIcon()}
        <Text style={[styles.text, { color: colors.text }]}>
          {label}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color={colors.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  text: {
    fontSize: 15,
    fontWeight: "500",
  },
});