import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function Filtro({
  label,
  opcoes = [],
  selecionados = [],
  setSelecionados,
}) {
  const [aberto, setAberto] = useState(false);

  const toggle = () => setAberto((prev) => !prev);

  const selecionar = (item) => {
    if (!setSelecionados) return;

    const atual = Array.isArray(selecionados) ? selecionados : [];

    let novos;

    if (atual.includes(item)) {
      novos = atual.filter((i) => i !== item);
    } else {
      novos = [...atual, item];
    }

    setSelecionados(novos);
  };

  const ativo = (opcao) => {
    return Array.isArray(selecionados) && selecionados.includes(opcao);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggle} style={styles.item}>
        <Text style={styles.label}>{label}</Text>

        <Entypo
          name={aberto ? "minus" : "plus"}
          size={18}
          color="#000"
        />
      </TouchableOpacity>

      {aberto && (
        <View style={styles.opcoes}>
          {opcoes.map((opcao) => (
            <TouchableOpacity
              key={opcao}
              style={styles.linha}
              onPress={() => selecionar(opcao)}
            >
              <Ionicons
                name={ativo(opcao) ? "checkbox" : "square-outline"}
                size={20}
                color={ativo(opcao) ? "#000" : "#000000"}
              />

              <Text style={[styles.texto, ativo(opcao) && styles.textoAtivo]}>
                {opcao}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
  },

  opcoes: {
    paddingVertical: 10,
    gap: 10,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  texto: {
    fontSize: 14,
    color: "#333",
  },

  textoAtivo: {
    fontWeight: "600",
  },
});