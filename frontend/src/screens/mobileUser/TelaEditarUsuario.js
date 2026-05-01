import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { usuariosMock } from "../../mock/UsuariosMock";

import ProfileHeader from "../../components/ProfileHeader";
import InputField from "../../components/InputField";
import NavBar from "../../components/NavBar";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaEditarUsuario() {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const userData = usuariosMock[1];

  const [nome, setNome] = useState(userData.nome);
  const [user, setUser] = useState(userData.usuario);
  const [email] = useState(userData.email);
  const [telefone, setTelefone] = useState(userData.telefone);
  const [data, setData] = useState(userData.nascimento);

  const [foto, setFoto] = useState(userData.fotoPerfil);

  const escolherImagem = async () => {
    const permissao =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

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

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* HEADER */}
        <ProfileHeader
          title="Editar perfil"
          onBack={() => navigation.goBack()}
          rightText="Salvar"
          onRightPress={() => navigation.goBack()}
        />

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

        {/* FORM - INPUTS AJUSTADOS */}
        <View style={styles.form}>
          
          <View style={styles.inputWrapper}>
            <InputField
              label="Nome completo"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputWrapper}>
            <InputField
              label="Usuário"
              value={user}
              onChangeText={setUser}
            />
          </View>

          <View style={styles.inputWrapper}>
            <InputField
              label="Email"
              value={email}
              editable={false}
            />
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
              placeholder="dd/mm/aaaa"
              keyboardType="numeric"
            />
          </View>

        </View>

      </ScrollView>

      {/* NAVBAR */}
      <NavBar />
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
    width: "90%",
    maxWidth: 320,
    marginBottom: 10,
  },
});