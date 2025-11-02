// 🎯 ARCHIVO: app/soporte-solicitud/[id].tsx (NUEVO)

import React, { useState } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, TouchableOpacity,
  TextInput, ScrollView, Platform, KeyboardAvoidingView, Alert
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SoporteSolicitudScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Obtenemos el ID de la solicitud por si lo necesitas

  // Estados para el formulario
  const [problema, setProblema] = useState('Problemas con trabajador'); // Estado para el dropdown
  const [descripcion, setDescripcion] = useState('');

  const handleEnviar = () => {
    console.log('Enviando ticket de soporte:', { solicitudId: id, problema, descripcion });
    // Lógica para enviar el ticket a tu backend...
    
    Alert.alert("Soporte", "Tu mensaje ha sido enviado.", [
      { text: "OK", onPress: () => router.back() } // Vuelve a la pantalla anterior
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        {/* --- Header Manual con Flecha --- */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={28} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Soporte de solicitud</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.iconContainer}>
            <Ionicons name="help-circle-outline" size={60} color="#3498DB" />
          </View>
          
          <Text style={styles.title}>¿Necesitas ayuda?</Text>
          <Text style={styles.subtitle}>Selecciona una opción de la lista para poder continuar.</Text>

          {/* Campo Dropdown (Simulado) */}
          <Text style={styles.label}>Problemas con trabajador</Text>
          <TouchableOpacity 
            style={styles.dropdownButton} 
            onPress={() => console.log('Abrir selector de problemas')}
          >
            <Text style={styles.dropdownText}>{problema}</Text>
            <Ionicons name="chevron-down-outline" size={20} color="#555" />
          </TouchableOpacity>

          {/* Campo Descripción */}
          <Text style={styles.label}>Describe el problema que estás presentando</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Necesito un mueble de cocina para mi casa, que sea de 2 puertas y no tan grande."
            placeholderTextColor="#BDBDBD"
            value={descripcion}
            onChangeText={setDescripcion}
            multiline
          />
        </ScrollView>

        {/* Botón Enviar fijo abajo */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleEnviar}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F7F8FA' // Fondo gris claro
  },
  // --- Header Manual ---
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F7F8FA',
  },
  backButton: {
    padding: 10, 
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
  },
  headerSpacer: {
    width: 48, 
  },
  // --- Contenido ---
  scrollContent: {
    padding: 20,
    paddingBottom: 120, // Espacio para el botón
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    fontWeight: '500',
  },
  dropdownButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAECEE',
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAECEE',
    padding: 15,
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
    color: '#333',
  },
  // --- Footer y Botón ---
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F7F8FA',
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#3498DB',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});