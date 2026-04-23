import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Filtro from "../../components/filtro";
import { filtrosMock } from "../../mock/FiltrosMock";

export default function TelaFiltro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtro</Text>

      {filtrosMock.map((filtro) => (
        <Filtro
          key={filtro.nome}
          label={filtro.nome}
          opcoes={filtro.opcoes}
        />
      ))}

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Aplicar filtros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Limpar filtros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
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
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },

  buttonSecondaryText: {
    color: "#000",
    fontWeight: "bold",
  },
});
