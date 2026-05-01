import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import ProfileHeader from "../../components/ProfileHeader";
import StatCard from "../../components/StatCard";
import ActionItem from "../../components/ActionItem";
import BottomNavAdmin from "../../components/BottomNavAdmin";

import { ThemeContext } from "../../context/ThemeContext";

export default function TelaPerfilAdmin() {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <ProfileHeader username="Painel do Administrador" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Estatísticas
        </Text>

        <View style={styles.cardsContainer}>
          <StatCard
            icon="location-outline"
            number="24"
            label="Locais cadastrados"
            IconComponent={Ionicons}
            color={{ bg: "#E6F0FA", icon: "#4A90E2" }}
          />

          <StatCard
            icon="people-outline"
            number="1.2k"
            label="Total de usuários"
            IconComponent={Ionicons}
            color={{ bg: "#E6F7EC", icon: "#4CAF50" }}
          />

          <StatCard
            icon="heart-outline"
            number="5.8k"
            label="Curtidas"
            IconComponent={Ionicons}
            color={{ bg: "#FDEBEC", icon: "#E74C3C" }}
          />

          <StatCard
            icon="bookmark-outline"
            number="3.2k"
            label="Salvos"
            IconComponent={Ionicons}
            color={{ bg: "#FEF3E6", icon: "#F39C12" }}
          />
        </View>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Ações Administrativas
        </Text>

        <ActionItem iconType="tag" label="Gerenciar Tags" />
        <ActionItem iconType="person" label="Gerenciar Usuários" />
        <ActionItem iconType="location" label="Gerenciar Locais" />

        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: colors.card }]}
        >
          <Feather name="log-out" size={18} color={colors.text} />
          <Text style={[styles.logoutText, { color: colors.text }]}>
            Sair
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavAdmin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 120, 
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 10,
  },

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },

  logoutButton: {
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    gap: 8,
  },

  logoutText: {
    fontSize: 15,
    fontWeight: "700",
  },
});