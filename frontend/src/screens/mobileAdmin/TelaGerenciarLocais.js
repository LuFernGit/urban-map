import React, { useState, useRef, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";

import HeaderDetails from "../../components/HeaderDetails";
import SearchBar from "../../components/SearchBar";
import BottomNavAdmin from "../../components/BottomNavAdmin";
import CardLocal from "../../components/CardLocal";
import TelaFiltro from "../mobileUser/TelaFiltro";

import { ThemeContext } from "../../context/ThemeContext";
import { locaisMock } from "../../mock/LocaisMock";

export default function TelaGerenciarLocais() {
  const { colors, modoEscuro } = useContext(ThemeContext);

  const [busca, setBusca] = useState("");
  const [filtroVisivel, setFiltroVisivel] = useState(false);
  const [filtrosAplicados, setFiltrosAplicados] = useState([]);

  const slideAnim = useRef(new Animated.Value(320)).current;

  const abrirFiltro = () => {
    setFiltroVisivel(true);

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const fecharFiltro = () => {
    Animated.timing(slideAnim, {
      toValue: 320,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setFiltroVisivel(false));
  };

  const filtrosIds = filtrosAplicados.map((f) => f.id);

  const filtrados = locaisMock.filter((l) => {
    const matchNome = l.nome.toLowerCase().includes(busca.toLowerCase());

    const matchTags =
      filtrosIds.length === 0 ||
      l.tags?.some((tag) => filtrosIds.includes(tag.id));

    return matchNome && matchTags;
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderDetails title="Gerenciar Locais" />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardLocal item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
        ListHeaderComponent={
          <>
            <SearchBar
              value={busca}
              onChangeText={setBusca}
              onFilterPress={abrirFiltro}
            />
          </>
        }
      />

      <BottomNavAdmin />

      {filtroVisivel && (
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={fecharFiltro}
          />

          <Animated.View
            style={[
              styles.panel,
              {
                backgroundColor: colors.card,
                transform: [{ translateX: slideAnim }],
              },
            ]}
          >
            <TelaFiltro
              selecionados={filtrosAplicados}
              setSelecionados={setFiltrosAplicados}
              onAplicar={(novos) => {
                setFiltrosAplicados(novos);
                setFiltroVisivel(false);
              }}
              onFechar={fecharFiltro}
            />
          </Animated.View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    zIndex: 999,
  },

  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },

  panel: {
    width: 320,
    height: "100%",
    backgroundColor: "#fff",
  },
});
