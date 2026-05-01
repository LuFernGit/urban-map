import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function TelaPerfilAdmin({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Perfil do Administrador</Text>

        <View style={{ width: 20 }} />
      </View>

      <Text style={styles.sectionTitle}>INFORMAÇÕES</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Usuário</Text>
          <Text style={styles.value}>Administrador</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>adminUrbanMap@gmail.com</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => alert('Adicionar novo local')}
      >
        <Text style={styles.addText}>Adicionar novo local</Text>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logout}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  back: {
    fontSize: 30,
    color: '#000',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  infoContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    width: 70,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  plus: {
    fontSize: 28,
    color: '#111',
  },
  logout: {
    marginTop: 80,
    marginLeft: 20,
    color: '#0066ff',
    fontSize: 16,
    fontStyle: 'italic',
  },
});