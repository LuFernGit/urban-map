import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

export default function CardLocal({ item }) {
  const { colors } = useContext(ThemeContext);

  const isAtivo = item.status?.toLowerCase() === "ativo";

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          borderWidth: 1,
        },
      ]}
    >
      <View style={styles.imageContainer}>
        <FlatList
          data={item.fotosUrl || []}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: img }) => (
            <Image
              source={img}   
              style={styles.image}
              resizeMode="cover"
            />
          )}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>
            {item.nome}
          </Text>

          <View style={styles.icons}>
            <Feather name="edit-2" size={18} color="#059669" />
            <Feather name="trash-2" size={18} color="#EF4444" />
          </View>
        </View>

        <Text style={[styles.desc, { color: colors.text }]}>
          {item.descricao}
        </Text>

        <View style={styles.tags}>
          {item.tags?.map((tag) => (
            <View key={tag.id} style={styles.tag}>
              <Text style={styles.tagText}>{tag.nome}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.city, { color: colors.text }]}>
          {item.cidade}
        </Text>

        <Text style={[styles.address, { color: colors.text }]}>
          {item.endereco}
        </Text>

        <Text style={[styles.coords, { color: colors.text }]}>
          Lat: {item.latitude} | Long: {item.longitude}
        </Text>

        <View
          style={[
            styles.status,
            {
              backgroundColor: isAtivo ? "#D1FAE5" : "#FEE2E2",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: isAtivo ? "#059669" : "#DC2626",
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 352,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5,
  },

  imageContainer: {
    width: "100%",
    height: 450,
  },

  image: {
    width: 350,   
    height: 450,
  },

  content: {
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  icons: {
    flexDirection: "row",
    gap: 20,
  },

  desc: {
    fontSize: 15,
    marginTop: 10,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },

  tag: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 15,
  },

  tagText: {
    color: "#0284C7",
    fontSize: 13,
    fontWeight: "700",
  },

  city: {
    marginTop: 15,
    fontWeight: "700",
    fontSize: 15,
  },

  address: {
    fontSize: 14,
    marginTop: 3,
  },

  coords: {
    fontSize: 14,
    marginTop: 3,
  },

  status: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    minWidth: 80,
    alignItems: "center",
  },

  statusText: {
    fontSize: 13,
    fontWeight: "700",
  },
});