import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ title, onPress, variant = "dark" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "light" && styles.lightButton,
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        variant === "light" && styles.lightText,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  lightButton: {
    backgroundColor: "#AFAFB0",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight:"bold",
  },

  lightText: {
    color: "#000",
  },
});