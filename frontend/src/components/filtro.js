import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

export default function Filtro({ label, opcoes = [] }) {
  const [aberto, setAberto] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

  const toggle = () => setAberto(!aberto);

  const selecionar = (item) => {
    if (selecionados.includes(item)) {
      setSelecionados(selecionados.filter((i) => i !== item));
    } else {
      setSelecionados([...selecionados, item]);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={toggle} style={styles.item}>
        <Text>{label}</Text>

        <Entypo
          name={"plus"}
          size={18}
          color="#333"
        />
      </TouchableOpacity>

      {aberto && (
        <View style={styles.opcoes}>
          {opcoes.map((opcao) => {
            const ativo = selecionados.includes(opcao);

            return (
              <TouchableOpacity
                key={opcao}
                style={[styles.tag, ativo && styles.tagAtiva]}
                onPress={() => selecionar(opcao)}
              >
                <Text style={ativo && styles.textAtivo}>{opcao}</Text>
              </TouchableOpacity>
            );
          })}
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

  opcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingVertical: 10,
  },

  tag: {
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 20,
  },

  tagAtiva: {
    backgroundColor: "#000",
  },

  textAtivo: {
    color: "#fff",
  },
});