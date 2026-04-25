import { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Dimensions,
  ScrollView,
} from "react-native";

import { SalvosContext } from "../context/SalvosContext";

const { width } = Dimensions.get("window");

export default function CardDetalhes({ lugar, onComentarioPress }) {
  const [curtido, setCurtido] = useState(false);
  const [indexAtivo, setIndexAtivo] = useState(0);

  const { salvos, toggleSalvo } = useContext(SalvosContext);
  const salvo = salvos.some((item) => item.id === lugar.id);

  const abrirMapa = (nome) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      nome,
    )}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      {/* CARROSSEL */}
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const slide = Math.round(event.nativeEvent.contentOffset.x / width);
          setIndexAtivo(slide);
        }}
      >
        {lugar.fotosUrl?.map((img, index) => (
          <View key={index} style={{ width }}>
            <Image source={img} style={styles.mainImage} />
          </View>
        ))}
      </ScrollView>

      {/* DOTS */}
      {lugar.fotosUrl?.length > 1 && (
        <View style={styles.dotsContainer}>
          {lugar.fotosUrl.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, indexAtivo === i && styles.dotActive]}
            />
          ))}
        </View>
      )}

      {/* AÇÕES */}
      <View style={styles.actionsRow}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={() => setCurtido(!curtido)}>
            <Image
              source={
                curtido
                  ? require("../assets/BotaoLikeFilled.png")
                  : require("../assets/BotaoLike.png")
              }
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onComentarioPress?.(lugar)}>
            <Image
              source={require("../assets/BotaoComentario.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => abrirMapa(lugar.nome)}>
            <Image
              source={require("../assets/BotaoGoogleMaps.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => toggleSalvo(lugar)}>
          <Image
            source={
              salvo
                ? require("../assets/BotaoSalvoFilled.png")
                : require("../assets/BotaoSalvo.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.likes}>{lugar.qtdLike} curtidas</Text>

      <Text style={styles.tags}>
        {lugar.tags?.map((tag) => `#${tag.nome}`).join(" ")}
      </Text>

      <Text style={styles.tituloDescricao}>Descrição:</Text>
      <Text style={styles.descricao}>{lugar.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },

  mainImage: {
    width: width,
    height: 450,
    resizeMode: "cover",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  leftActions: {
    flexDirection: "row",
    gap: 16,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  likes: {
    marginHorizontal: 16,
    fontSize: 13,
    marginBottom: 4,
  },

  tags: {
    marginHorizontal: 16,
    fontSize: 13,
    marginBottom: 10,
    color: "#222",
  },

  descricao: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  
  tituloDescricao: {
    marginHorizontal: 16,
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },

  dotActive: {
    backgroundColor: "#333",
    width: 8,
    height: 8,
  },
});
