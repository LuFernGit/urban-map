import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function TelaCadastroAdm() {
  const [data, setData] = useState("");

  const formatarData = (texto) => {
    let valor = texto.replace(/\D/g, "");

    if (valor.length > 2) {
      valor = valor.slice(0, 2) + "/" + valor.slice(2);
    }
    if (valor.length > 5) {
      valor = valor.slice(0, 5) + "/" + valor.slice(5, 9);
    }

    return valor;
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.left}>
        <Image
          source={require("../../assets/ArteAdm.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.description}>
          Preencha os dados para começar
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Nome completo</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#999" />
            <TextInput
              placeholder="Nome Completo"
              placeholderTextColor="#999"
              style={styles.inputIcon}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#999" />
            <TextInput
              placeholder="seu@email.com"
              placeholderTextColor="#999"
              style={styles.inputIcon}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Nome de usuário</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-circle-outline" size={20} color="#999" />
            <TextInput
              placeholder="@seunome"
              placeholderTextColor="#999"
              style={styles.inputIcon}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <View style={styles.field}>
              <Text style={styles.label}>Telefone</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="call-outline" size={20} color="#999" />
                <TextInput
                  placeholder="(00) 00000-0000"
                  placeholderTextColor="#999"
                  style={styles.inputIcon}
                />
              </View>
            </View>
          </View>

          <View style={styles.halfInput}>
            <View style={styles.field}>
              <Text style={styles.label}>Data de nascimento</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="calendar-outline" size={20} color="#999" />
                <TextInput
                  placeholder="DD/MM/AAAA"
                  placeholderTextColor="#999"
                  style={styles.inputIcon}
                  value={data}
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={(text) => setData(formatarData(text))}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" />
            <TextInput
              placeholder="Mínimo 6 caracteres"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.inputIcon}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Confirmar senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" />
            <TextInput
              placeholder="Digite novamente a senha"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.inputIcon}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.login}>
          Já tem uma conta? <Text style={styles.link}>Faça o login</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  left: {
    flex: 1,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  right: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  description: {
    color: "#666",
    marginBottom: 20,
  },

  field: {
    marginBottom: 12,
  },

  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 2,
    marginLeft: 2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  halfInput: {
    width: "48%",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: 45,
  },

  inputIcon: {
    flex: 1,
    marginLeft: 10,
  },

  button: {
    backgroundColor: "#3BA6E0",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#999",
  },

  login: {
    marginTop: 10,
    textAlign: "center",
  },

  link: {
    color: "#3BA6E0",
  },
});