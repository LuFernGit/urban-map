import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function TelaPerfilAdminWeb() {
  return (
    <View style={styles.container}>
      {/* sidebar esquerda */}
      <View style={styles.sidebar}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.infoTitle}>INFORMAÇÕES</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Usuário</Text>
          <Text style={styles.value}>Administrador</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>adminUrbanMap@gmail.com</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.logout}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

      {/* conteúdo principal */}
      <View style={styles.main}>
        <Text style={styles.title}>Perfil do Administrador</Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Adicionar novo local +</Text>
        </TouchableOpacity>
      </View>

      {/* rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          @COPYRIGHT. TODOS OS DIREITOS RESERVADOS.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  sidebar: {
    width: 260,
    backgroundColor: '#dff3ff',
    padding: 25,
    justifyContent: 'flex-start',
  },
  logo: {
    width: 140,
    height: 80,
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111',
  },
  infoBox: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bcd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#333',
  },
  logout: {
    marginTop: 30,
    color: '#0066ff',
    fontSize: 16,
    fontStyle: 'italic',
  },
  main: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#111',
  },
  addButton: {
    backgroundColor: '#f2f2f2',
    padding: 18,
    borderRadius: 6,
    width: 320,
  },
  addText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 260,
    right: 0,
    backgroundColor: '#cfcfcf',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#111',
  },
});