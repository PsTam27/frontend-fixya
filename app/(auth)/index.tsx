// 🎯 ARCHIVO: app/(auth)/index.tsx (CON IMÁGENES REALES)

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function RoleSelectionScreen() {
  const handleSelectRole = (role: string) => {
    console.log(`Rol seleccionado para registrar: ${role}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.headerTitle}>Registro</Text>

        {/* --- IMAGEN 1: LOGO SUPERIOR --- */}
        <Image source={require('../../assets/images/logo.jpeg')} style={styles.logo} />

        <View style={styles.selectionContainer}>
          <TouchableOpacity style={styles.card} onPress={() => handleSelectRole('trabajador')}>
            {/* --- IMAGEN 2: AVATAR TRABAJADOR --- */}
            <Image source={require('../../assets/images/worker.jpeg')} style={styles.cardImage} />
            <Text style={styles.cardText}>Trabajador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleSelectRole('usuario')}>
            {/* --- IMAGEN 3: AVATAR USUARIO --- */}
            {/* Usando map.jpeg como ejemplo, cámbialo si tienes una imagen específica para el usuario */}
            <Image source={require('../../assets/images/user.jpeg')} style={styles.cardImage} />
            <Text style={styles.cardText}>Usuario</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.instructionText}>
          Selecciona el tipo de cuenta con el que quieres registrarte.
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ¿Ya tienes una cuenta?{' '}
          <Link href="/(auth)/login" style={styles.link}>
            Inicia sesión
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  mainContent: { flex: 1, alignItems: 'center', paddingTop: 60, paddingHorizontal: 20, justifyContent: 'center' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#2C3E50', marginBottom: 40 },
  logo: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 50 },
  selectionContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  card: { width: 140, height: 160, backgroundColor: 'white', borderRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  cardImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 15, resizeMode: 'cover' },
  cardText: { fontSize: 16, fontWeight: '600', color: '#34495E' },
  instructionText: { marginTop: 40, color: '#7F8C8D', fontSize: 14, textAlign: 'center', maxWidth: '70%' },
  footer: { paddingBottom: 40, alignItems: 'center' },
  footerText: { fontSize: 14, color: '#7F8C8D' },
  link: { color: '#3498DB', fontWeight: 'bold' },
});