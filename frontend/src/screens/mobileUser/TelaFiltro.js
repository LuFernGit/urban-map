import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { useContext } from "react";

import Filter from "../../components/Filter";
import { tagsMock } from "../../mock/TagsMock";
import { ThemeContext } from "../../context/ThemeContext";

export default function TelaFiltro({
  selecionados = [],
  setSelecionados,
  onAplicar,
  onFechar,
}) {
  const { colors } = useContext(ThemeContext);

  // 🔥 agrupa por categoria
  const grupos = tagsMock.reduce((acc, tag) => {
    if (!acc[tag.categoria]) acc[tag.categoria] = [];
    acc[tag.categoria].push(tag);
    return acc;
  }, {});

  // chips selecionados
  const chipsSelecionados = selecionados;

  // remover chip
  const removerChip = (item) => {
    const novos = selecionados.filter((i) => i.id !== item.id);
    setSelecionados(novos);
  };

  // aplicar filtros (SÓ AQUI A LISTA MUDA)
  const aplicarFiltros = () => {
    onAplicar(selecionados);
  };

  // limpar filtros
  const limparFiltros = () => {
    setSelecionados([]);
    onAplicar([]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={[styles.title, { color: colors.text }]}>
          Filtro
        </Text>

        {/* 🔥 chips selecionados */}
        {chipsSelecionados.length > 0 && (
          <View style={styles.chipsContainer}>
            {chipsSelecionados.map((item) => (
              <Pressable
                key={item.id}
                style={[styles.chip, { backgroundColor: colors.card }]}
                onPress={() => removerChip(item)}
              >
                <Text style={{ color: colors.text }}>
                  {item.nome} ✕
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* 🔥 filtros por categoria */}
        {Object.entries(grupos).map(([categoria, opcoes]) => (
          <Filter
            key={categoria}
            label={categoria}
            opcoes={opcoes}
            selecionados={selecionados}
            setSelecionados={setSelecionados}
          />
        ))}

        {/* BOTÕES */}
        <View style={styles.buttons}>
          
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.accent }]}
            onPress={aplicarFiltros}
          >
            <Text style={styles.buttonText}>
              Aplicar filtros
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonSecondary,
              { borderColor: colors.border },
            ]}
            onPress={limparFiltros}
          >
            <Text
              style={[
                styles.buttonSecondaryText,
                { color: colors.text },
              ]}
            >
              Limpar filtros
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  button: {
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
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    borderWidth: 1,
  },

  buttonSecondaryText: {
    fontWeight: "bold",
  },
});