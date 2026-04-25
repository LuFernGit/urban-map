import { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InputField({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
  keyboardType,
}) {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <View style={[styles.container, error && styles.errorBorder]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidePassword}
        keyboardType={keyboardType}
        style={styles.input}
      />

      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.icon}
        >
          <Ionicons
            name={hidePassword ? "eye-off" : "eye"}
            size={20}
            color="#9f9f9f"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f1f2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DADADA",
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    padding: 15,
    color: "#000",
  },

  icon: {
    padding: 5,
  },

  errorBorder: {
    borderColor: "red",
  },
});
