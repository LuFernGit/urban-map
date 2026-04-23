import { useEffect, useState, useContext, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Animated,
} from "react-native";

import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import Card from "../../components/card";
import NavBar from "../../components/navBar";

import TelaFiltro from "./TelaFiltro";

import { locaisMock } from "../../mock/LocaisMock";

import { ConfigContext } from "../../context/ConfigContext";
import { themes } from "../../theme/theme";

export default function TelaPrincipal() {
  const [busca, setBusca] = useState("");
  const [lugares, setLugares] = useState([]);
  const [modalVisivel, setModalVisivel] = useState(false);

  const slideAnim = useRef(new Animated.Value(400)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const { theme } = useContext(ConfigContext);

  useEffect(() => {
    carregar();
  }, []);

  const carregar = async () => {
    setLugares(locaisMock);
  };

  const abrirModal = () => {
    setModalVisivel(true);

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const fecharModal = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 400,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => setModalVisivel(false));
  };

  const filtrados = lugares.filter((l) =>
    l.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  const limparBusca = () => {
    setBusca("");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes[theme].backgroundColor },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />

        <SearchBar
          value={busca}
          onChangeText={setBusca}
          onClear={limparBusca}
          onFilterPress={abrirModal}
        />

        {filtrados.map((item) => (
          <Card key={item.id} lugar={item} />
        ))}
      </ScrollView>

      <NavBar />

      {modalVisivel && (
        <View style={StyleSheet.absoluteFill}>
          {/* FUNDO ESCURO */}
          <Pressable style={styles.overlay} onPress={fecharModal}>
            <Animated.View style={{ flex: 1, opacity: opacityAnim }} />
          </Pressable>

          <Animated.View
            style={[styles.modal, { transform: [{ translateX: slideAnim }] }]}
          >
            <TelaFiltro />
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 100,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

 modal: {
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  width: "80%", 
  backgroundColor: "#fff",
  overflow: "hidden",
},
});
