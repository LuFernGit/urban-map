import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNavAdmin() {
  const navigation = useNavigation();
  const route = useRoute();

  const { modoEscuro, colors } = useContext(ThemeContext);

  const isActive = (rota) => route.name === rota;

  return (
    <View
      style={[
        styles.bottomNav,
        {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
      ]}
    >
      <TouchableOpacity onPress={() => navigation.navigate("PainelAdmin")}>
        <Image
          source={
            isActive("PainelAdmin")
              ? modoEscuro
                ? require("../assets/BotaoHomeFilled-dark.png")
                : require("../assets/BotaoHomeFilled.png")
              : modoEscuro
                ? require("../assets/BotaoHome-dark.png")
                : require("../assets/BotaoHome.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PerfilAdmin")}>
        <Image
          source={
            isActive("PerfilAdmin")
              ? modoEscuro
                ? require("../assets/BotaoPerfilFilled-dark.png")
                : require("../assets/BotaoPerfilFilled.png")
              : modoEscuro
                ? require("../assets/BotaoPerfil-dark.png")
                : require("../assets/BotaoPerfil.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ConfigAcessibilidade")}
      >
        <Ionicons
          name={
            isActive("ConfigAcessibilidadeAdmin")
              ? "settings"
              : "settings-outline"
          }
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 65,
    borderTopWidth: 1,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
