import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function TelaGerenciarLocaisWeb() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.iconBox}>
            <Ionicons name="grid" size={18} color="#555" />
          </View>
          <Text style={styles.menuText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItemActive}>
          <View style={styles.iconBoxActive}>
            <Ionicons name="home" size={18} color="#fff" />
          </View>
          <Text style={styles.menuTextActive}>Gerenciar Locais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.iconBox}>
            <Ionicons name="people" size={18} color="#555" />
          </View>
          <Text style={styles.menuText}>Gerenciar Usuários</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.iconBox}>
            <Ionicons name="pricetag" size={18} color="#555" />
          </View>
          <Text style={styles.menuText}>Gerenciar Tags</Text>
        </TouchableOpacity>

        <View style={styles.logout}>
          <View style={styles.iconBox}>
            <Ionicons name="log-out" size={18} color="#555" />
          </View>
          <Text style={styles.menuText}>Sair</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.header}>Perfil do Administrador</Text>

        <Text style={styles.title}>Gerenciamento de Lugares</Text>
        <Text style={styles.subtitle}>
          Gerencie todos os lugares cadastrados no sistema
        </Text>

        <View style={styles.topBar}>
          <TextInput
            placeholder="Buscar por nome, usuário ou email..."
            style={styles.search}
          />

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Novo local +</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableHeader}>
          <Text style={styles.th}>LUGAR</Text>
          <Text style={styles.th}>CATEGORIAS</Text>
          <Text style={styles.th}>LOCALIZAÇÃO</Text>
          <Text style={styles.th}>COORDENADAS</Text>
          <Text style={styles.th}>STATUS</Text>
          <Text style={styles.th}>AÇÕES</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.place}>
            <Image
              source={require("../../assets/ArteAdm.png")}
              style={styles.placeImg}
            />
            <View>
              <Text style={styles.placeTitle}>Beto Carrero World</Text>
              <Text style={styles.placeDesc}>
                Parque temático da América Latina
              </Text>
            </View>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>Restaurante</Text>
          </View>

          <Text style={styles.td}>Santa Catarina</Text>

          <View>
            <Text style={styles.td}>Lat: -26.78</Text>
            <Text style={styles.td}>Long: -48.61</Text>
          </View>

          <View style={styles.statusBox}>
            <Text style={styles.statusText}>Ativo</Text>
          </View>

          <View style={styles.actions}>
            <Ionicons name="create-outline" size={18} color="#3BA6E0" />
            <Ionicons name="trash-outline" size={18} color="#E74C3C" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  sidebar: {
    width: 220,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },

  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
    marginBottom: 30,
    alignSelf: "center",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },

  menuItemActive: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },

  iconBox: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center",
  },

  iconBoxActive: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: "#3BA6E0",
    justifyContent: "center",
    alignItems: "center",
  },

  menuText: {
    color: "#555",
  },

  menuTextActive: {
    color: "#3BA6E0",
    fontWeight: "bold",
  },

  logout: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  content: {
    flex: 1,
    padding: 30,
    paddingTop: 100,
    backgroundColor: "#fff",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#eee",
    padding: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#666",
    marginBottom: 20,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginRight: 10,
  },

  addButton: {
    backgroundColor: "#3BA6E0",
    padding: 12,
    borderRadius: 6,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  tableHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 12,
  paddingHorizontal: 10,
  backgroundColor: "#f3f4f6",
  borderRadius: 8,
  marginBottom: 5,
},

  th: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#666",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  place: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: 200,
  },

  placeImg: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },

  placeTitle: {
    fontWeight: "bold",
    fontSize: 13,
  },

  placeDesc: {
    fontSize: 11,
    color: "#666",
  },

  badge: {
    backgroundColor: "#e0edff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  badgeText: {
    color: "#3BA6E0",
    fontSize: 12,
  },

  td: {
    fontSize: 13,
  },

  statusBox: {
    backgroundColor: "#e6f9ed",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  statusText: {
    color: "#2ecc71",
    fontWeight: "bold",
    fontSize: 12,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
  },
});