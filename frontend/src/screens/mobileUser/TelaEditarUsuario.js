import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { usuariosMock } from "../../mock/UsuariosMock";

import BottomNav from "../../components/BottomNav";
import InputField from "../../components/InputField";
import ProfileHeader from "../../components/ProfileHeader";
import PrimaryButton from "../../components/PrimaryButton";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaEditarUsuario() {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const userData = usuariosMock[1];

  const [nome, setNome] = useState(userData.nome);
  const [user, setUser] = useState(userData.nomeUsuario);
  const [email] = useState(userData.email);
  const [telefone, setTelefone] = useState(userData.telefone);
  const [data, setData] = useState(userData.dataNascimento);
  const [foto, setFoto] = useState(userData.fotoUrl);

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

  const salvar = () => {
    console.log("Dados salvos:");
    console.log({ nome, user, telefone, data, foto });

    navigation.goBack();
  };

  const cancelar = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ProfileHeader
        username="Editar perfil"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.content}>
        {/* FOTO */}
        <View style={styles.avatarSection}>
          <TouchableOpacity onPress={escolherImagem}>
            <Image source={foto} style={styles.avatar} />
          </TouchableOpacity>

          <TouchableOpacity onPress={escolherImagem}>
            <Text style={[styles.changePhoto, { color: colors.accent }]}>
              Alterar foto
            </Text>
          </TouchableOpacity>
        </View>

        {/* FORMULÁRIO */}
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <InputField
              label="Nome completo"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputWrapper}>
            <InputField label="Usuário" value={user} onChangeText={setUser} />
          </View>

          <View style={styles.inputWrapper}>
            <InputField label="Email" value={email} editable={false} />
          </View>

          <View style={styles.inputWrapper}>
            <InputField
              label="Telefone"
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputWrapper}>
            <InputField
              label="Data de nascimento"
              value={data}
              onChangeText={setData}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* BOTÕES */}
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="Salvar"
            onPress={salvar}
            style={styles.saveButton}
          />

          <PrimaryButton
            title="Cancelar"
            onPress={cancelar}
            style={styles.cancelButton}
          />
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingBottom: 40,
  },

  avatarSection: {
    alignItems: "center",
    marginTop: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  changePhoto: {
    marginTop: 8,
    fontWeight: "500",
  },

  form: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },

  inputWrapper: {
    width: "100%",
    maxWidth: 320,
    marginBottom: 10,
  },

  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 35,
    gap: 10,
  },

  saveButton: {
    width: "90%",
    maxWidth: 320,
    backgroundColor: "#1E88E5",
  },

  cancelButton: {
    width: "90%",
    maxWidth: 320,
    backgroundColor: "#999",
  },
});
