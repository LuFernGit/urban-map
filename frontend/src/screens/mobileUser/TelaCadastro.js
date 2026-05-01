import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaCadastro({ navigation }) {
  const { colors } = useContext(ThemeContext);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    nascimento: "",
    usuario: "",
    senha: "",
    confirmarSenha: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const formatDate = (text) => {
    const cleaned = text.replace(/\D/g, "").slice(0, 8);

    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4)
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2);

    return (
      cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4) + "/" + cleaned.slice(4)
    );
  };

  const validar = () => {
    let novosErros = {};

    Object.keys(form).forEach((key) => {
      if (!form[key]) novosErros[key] = true;
    });

    if (form.senha !== form.confirmarSenha) {
      novosErros.confirmarSenha = true;
    }

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleCadastro = () => {
    if (validar()) {
      navigation.navigate("CadastroSucesso");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Ionicons name="chevron-back" size={28} color={colors.text} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, { color: colors.text }]}>
        Junte-se a nós.{"\n"}Compartilhe momentos
      </Text>

      <View style={styles.form}>
        <InputField
          placeholder="Nome Completo"
          value={form.nome}
          onChangeText={(v) => handleChange("nome", v)}
          error={errors.nome}
        />

        <InputField
          placeholder="Email"
          value={form.email}
          onChangeText={(v) => handleChange("email", v)}
          keyboardType="email-address"
          error={errors.email}
        />

        <InputField
          placeholder="Telefone"
          value={form.telefone}
          onChangeText={(v) => handleChange("telefone", v)}
          keyboardType="phone-pad"
          error={errors.telefone}
        />

        <InputField
          placeholder="Data de nascimento"
          value={form.nascimento}
          onChangeText={(v) => handleChange("nascimento", formatDate(v))}
          keyboardType="numeric"
          error={errors.nascimento}
        />

        <InputField
          placeholder="Usuário"
          value={form.usuario}
          onChangeText={(v) => handleChange("usuario", v)}
          error={errors.usuario}
        />

        <InputField
          placeholder="Senha"
          value={form.senha}
          onChangeText={(v) => handleChange("senha", v)}
          secureTextEntry
          error={errors.senha}
        />

        <InputField
          placeholder="Confirme sua senha"
          value={form.confirmarSenha}
          onChangeText={(v) => handleChange("confirmarSenha", v)}
          secureTextEntry
          error={errors.confirmarSenha}
        />

        <PrimaryButton title="Cadastre-se" onPress={handleCadastro} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 40,
  },

  header: {
    width: "100%",
    paddingLeft: 15,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 35,
    textAlign: "left",
    width: "90%",
  },

  form: {
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
});
