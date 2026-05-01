import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useContext } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

export default function Filter({
  label,
  opcoes = [],
  selecionados = [],
  setSelecionados,
}) {
  const [aberto, setAberto] = useState(false);
  const { colors } = useContext(ThemeContext);

  const toggle = () => setAberto((prev) => !prev);

  // 🔥 verifica se está selecionado
  const ativo = (opcao) =>
    selecionados?.some((i) => i.id === opcao.id);

  // 🔥 seleciona / desmarca (SÓ ALTERA ESTADO LOCAL DO FILTRO)
  const selecionar = (item) => {
    if (!setSelecionados) return;

    const atual = Array.isArray(selecionados) ? selecionados : [];

    let novos;

    if (atual.some((i) => i.id === item.id)) {
      novos = atual.filter((i) => i.id !== item.id);
    } else {
      novos = [...atual, item];
    }

    setSelecionados(novos);
  };

  return (
    <View>
      {/* HEADER DO FILTRO */}
      <TouchableOpacity
        onPress={toggle}
        style={[styles.item, { borderColor: colors.text + "30" }]}
      >
        <Text style={[styles.label, { color: colors.text }]}>
          {label}
        </Text>

        <Entypo
          name={aberto ? "minus" : "plus"}
          size={18}
          color={colors.text}
        />
      </TouchableOpacity>

      {/* OPÇÕES */}
      {aberto && (
        <View style={styles.opcoes}>
          {opcoes.map((opcao) => (
            <TouchableOpacity
              key={opcao.id}
              style={styles.linha}
              onPress={() => selecionar(opcao)}
            >
              <Ionicons
                name={ativo(opcao) ? "checkbox" : "square-outline"}
                size={20}
                color={colors.text}
              />

              <Text
                style={[
                  styles.texto,
                  {
                    color: colors.text,
                    fontWeight: ativo(opcao) ? "600" : "400",
                  },
                ]}
              >
                {opcao.nome}
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
  },
});