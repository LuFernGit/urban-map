import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";

export default function ImageCarousel({ images = [] }) {
  return (
    <FlatList
      data={images}
      keyExtractor={(_, i) => i.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Image source={item} style={styles.image} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 200,
  },
});