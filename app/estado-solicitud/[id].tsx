// 🎯 ARCHIVO: app/estado-solicitud/[id].tsx (NUEVO)

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function EstadoSolicitudScreen() {
  const router = useRouter();
  // Obtenemos el ID de la solicitud
  const { id } = useLocalSearchParams(); 

  // Aquí harías la llamada a tu backend de Go con el 'id'
  // para obtener el estado, las fotos, notas, etc.

  return (
    <SafeAreaView style={styles.container}>
      {/* Configura la barra de título con la flecha de atrás */}
      <Stack.Screen 
        options={{ 
          headerShown: true, 
          title: 'Estado de solicitud',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#F7F8FA' } // Fondo gris claro
        }} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* --- Sección de Información --- */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Estado:</Text>
            <Text style={styles.value}>Aceptado</Text>
          </View>
          
          <Text style={styles.label}>Fotos de trabajo:</Text>
          <View style={styles.photosContainer}>
            {/* CORRECCIÓN: Usamos placeholders de internet en lugar de 'require' */}
            <Image 
              source={{ uri: 'https://placehold.co/80x80/EAECEE/7F8C8D?text=Foto+1' }} 
              style={styles.photo} 
            />
            <Image 
              source={{ uri: 'https://placehold.co/80x80/EAECEE/7F8C8D?text=Foto+2' }} 
              style={styles.photo} 
            />
          </View>

          <Text style={styles.label}>Notas de trabajador:</Text>
          <Text style={styles.value}>
            Se realizó la evaluación para la confección de mueble de cocina.. 
            <Text style={styles.verMas}> Ver más</Text>
          </Text>

          <View style={styles.deliveryStatus}>
            <Text style={styles.label}>Estado de entrega: </Text>
            <Text style={styles.value}>A tiempo </Text>
            <Ionicons name="checkmark-circle" size={20} color="#3498DB" />
          </View>
        </View>
      </ScrollView>

      {/* --- Tarjeta de Soporte (fija abajo) --- */}
      <View style={styles.supportBox}>
        <Text style={styles.supportTitle}>La seguridad de nuestros clientes es primordial para nuestra empresa</Text>
        <Text style={styles.supportText}>Si necesitas ayuda con esta solicitud o estás presentando un problema con el trabajador contactanos y te atenderemos a la brevedad.</Text>
        <TouchableOpacity style={styles.supportButton}>
          <Text style={styles.supportButtonText}>Soporte</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F7F8FA' // Fondo gris claro
  },
  scrollContent: { 
    padding: 20,
    paddingBottom: 250, // Espacio para la tarjeta de soporte
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    color: '#34495E',
  },
  photosContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#EAECEE',
  },
  verMas: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
  deliveryStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  // Tarjeta de Soporte
  supportBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2C3E50',
  },
  supportText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  supportButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  supportButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});