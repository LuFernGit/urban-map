import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
import Filtro from "../../components/Filter";
import { filtrosMock } from "../../mock/FiltrosMock";

export default function TelaFiltro({
  filtrosAtuais = {},
  onAplicar,
  onFechar,
}) {
  const [selecionados, setSelecionados] = useState(filtrosAtuais);

  const aplicarFiltros = () => {
    onAplicar(selecionados);
  };

  const limparFiltros = () => {
    setSelecionados({});
    onAplicar({});
  };

  const chipsSelecionados = Object.entries(selecionados).flatMap(
    ([categoria, valores]) =>
      valores.map((valor) => ({
        categoria,
        valor,
      }))
  );

  const removerChip = (categoria, valor) => {
    const novos = selecionados[categoria].filter((v) => v !== valor);

    setSelecionados((prev) => ({
      ...prev,
      [categoria]: novos,
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Filtro</Text>

        {chipsSelecionados.length > 0 && (
          <View style={styles.chipsContainer}>
            {chipsSelecionados.map((item, index) => (
              <Pressable
                key={index}
                style={styles.chip}
                onPress={() => removerChip(item.categoria, item.valor)}
              >
                <Text style={styles.chipText}>
                  {item.valor} ✕
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        {filtrosMock.map((filtro) => (
          <Filtro
            key={filtro.nome}
            label={filtro.nome}
            opcoes={filtro.opcoes}
            selecionados={selecionados[filtro.nome] || []}
            setSelecionados={(novos) =>
              setSelecionados((prev) => ({
                ...prev,
                [filtro.nome]: novos,
              }))
            }
          />
        ))}

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={aplicarFiltros}>
            <Text style={styles.buttonText}>Aplicar filtros</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={limparFiltros}
          >
            <Text style={styles.buttonSecondaryText}>Limpar filtros</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },

  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },

  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 15,
  },

  chip: {
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  chipText: {
    fontSize: 12,
    color: "#333",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttonSecondary: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },

  buttonSecondaryText: {
    color: "#fff",
    fontWeight: "bold",
  },
});