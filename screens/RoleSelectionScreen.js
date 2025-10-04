import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function RoleSelectionScreen({ navigation }) {
  const handleSelectRole = (role) => {
    navigation.navigate('RegistrationForm', { role: role });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.headerTitle}>Registro</Text>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.selectionContainer}>
          <TouchableOpacity style={styles.card} onPress={() => handleSelectRole('trabajador')}>
            <Image source={require('../assets/worker-avatar.png')} style={styles.cardImage} />
            <Text style={styles.cardText}>Trabajador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleSelectRole('usuario')}>
            <Image source={require('../assets/user-avatar.png')} style={styles.cardImage} />
            <Text style={styles.cardText}>Usuario</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.instructionText}>Selecciona el tipo de cuenta con el que quieres registrarte.</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>¿Ya tienes una cuenta? <Text style={styles.loginLink}>Inicia sesión</Text></Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#F7F8FA' }, mainContent: { flex: 1, alignItems: 'center', paddingTop: 60, paddingHorizontal: 20 }, headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#2C3E50', marginBottom: 40 }, logo: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 50 }, selectionContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' }, card: { width: 140, height: 160, backgroundColor: 'white', borderRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 }, cardImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 15 }, cardText: { fontSize: 16, fontWeight: '600', color: '#34495E' }, instructionText: { marginTop: 40, color: '#7F8C8D', fontSize: 14, textAlign: 'center', maxWidth: '70%' }, footer: { paddingBottom: 40, alignItems: 'center' }, footerText: { fontSize: 14, color: '#7F8C8D' }, loginLink: { color: '#3498DB', fontWeight: 'bold' } });