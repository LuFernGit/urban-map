import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";

export default function TelaCadastro({ navigation }) {
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
    setForm({ ...form, [field]: value });
  };

  const validar = () => {
    let novosErros = {};

    if (!form.nome) novosErros.nome = true;
    if (!form.email) novosErros.email = true;
    if (!form.telefone) novosErros.telefone = true;
    if (!form.nascimento) novosErros.nascimento = true;
    if (!form.usuario) novosErros.usuario = true;
    if (!form.senha) novosErros.senha = true;
    if (form.senha !== form.confirmarSenha) novosErros.confirmarSenha = true;

    setErrors(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  const handleCadastro = () => {
    if (validar()) {
      navigation.navigate("CadastroSucesso");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="#1e232c"
          onPress={() => navigation.goBack()}
        />
      </View>

      <Text style={styles.title}>
        Junte-se a nós.{"\n"}Compartilhe momentos
      </Text>

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
        onChangeText={(v) => handleChange("nascimento", v)}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },

  header: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 10,
    padding: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e232c",
    marginBottom: 30,
  },
});
