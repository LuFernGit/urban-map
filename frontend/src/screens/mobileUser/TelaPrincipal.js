import { useEffect, useState, useContext, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import ScrollToTopButton from "../../components/ScrollToTopButton";

import BottomSheetComentarios from "../../components/BottomSheetComentarios";

import { locaisMock } from "../../mock/LocaisMock";
import { comentariosMock } from "../../mock/ComentariosMock";
import { ConfigContext } from "../../context/ConfigContext";
import { themes } from "../../theme/theme";

export default function TelaPrincipal() {
  const [busca, setBusca] = useState("");
  const [lugares, setLugares] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [localSelecionado, setLocalSelecionado] = useState(null);

  const [showButton, setShowButton] = useState(false);

  const { theme } = useContext(ConfigContext);
  const navigation = useNavigation();

  const scrollRef = useRef(null);
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    setLugares(locaisMock);
    setComentarios(comentariosMock);
  }, []);

  // 🔥 scroll detecta posição
  const handleScroll = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    setShowButton(y > 200);
  };

  // 🔥 volta ao topo
  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const abrirComentarios = (lugar) => {
    setLocalSelecionado(lugar);
    bottomSheetRef.current?.expand();
  };

  const adicionarComentario = (novo) => {
    setComentarios((prev) => [
      {
        ...novo,
        localId: localSelecionado?.id,
      },
      ...prev,
    ]);
  };

  const comentariosFiltrados = comentarios.filter(
    (c) => c.localId === localSelecionado?.id
  );

  const filtrados = lugares.filter((l) =>
    l.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes[theme].backgroundColor },
      ]}
    >
      <ScrollView
        ref={scrollRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scroll}
      >
        <Header />
        <SearchBar value={busca} onChangeText={setBusca} />

        {filtrados.map((item) => (
          <Card
            key={item.id}
            lugar={item}
            onComentarioPress={() => abrirComentarios(item)}
            onPress={() =>
              navigation.navigate("DetalhesLocal", { lugar: item })
            }
          />
        ))}
      </ScrollView>

      {/* 🔥 botão correto */}
      <ScrollToTopButton
        visible={showButton}
        onPress={scrollToTop}
      />

      <NavBar />

      <BottomSheetComentarios
        bottomSheetRef={bottomSheetRef}
        comentarios={comentariosFiltrados}
        onEnviarComentario={adicionarComentario}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: 100 },
});