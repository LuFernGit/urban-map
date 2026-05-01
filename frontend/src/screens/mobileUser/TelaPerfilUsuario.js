import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { usuariosMock } from "../../mock/UsuariosMock";

import BottomNav from "../../components/BottomNav";
import PrimaryButton from "../../components/PrimaryButton";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileInfo from "../../components/ProfileInfo";
import ProfileStats from "../../components/ProfileStats";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaPerfilUsuario() {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const usuario = usuariosMock[1];
  const [foto, setFoto] = useState(usuario.fotoPerfil);

  const escolherImagem = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      alert("Permissão necessária para acessar a galeria!");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      setFoto({ uri: resultado.assets[0].uri });
    }
  };

  const confirmarSaida = () => {
    Alert.alert("Deseja sair?", "Tem certeza que deseja sair da sua conta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <ProfileHeader
          username={usuario.nomeUsuario}
          onSettingsPress={() => navigation.navigate("ConfigAcessibilidade")}
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={escolherImagem}>
            <ProfileInfo fotoPerfil={foto} name={usuario.nome} />
          </TouchableOpacity>

          <ProfileStats likes={120} saved={18} />

          <View style={styles.buttonWrapper}>
            <PrimaryButton
              title="Editar perfil"
              onPress={() => navigation.navigate("EditarUsuario")}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logout} onPress={confirmarSaida}>
          <Text style={[styles.logoutText, { color: colors.error || "red" }]}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <BottomNav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  profileContainer: {
    alignItems: "center",
    gap: 12,
    marginTop: 20,
  },

  buttonWrapper: {
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 10,
  },

  logout: {
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 80,
  },

  logoutText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
