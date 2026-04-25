import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AuthFooter({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.footer}>
      <Text>
        Não tem uma conta?{" "}
        <Text style={styles.link}>Cadastre-se agora.</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 200,
  },
  link: {
    color: "#38B6FF",
    fontStyle:"italic",
    fontWeight:"900",
  },
  
});