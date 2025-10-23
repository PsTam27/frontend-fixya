// 🎯 ARCHIVO: app/resumen-solicitud/[id].tsx (COMPLETO Y ACTUALIZADO)

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

export default function ResumenSolicitudScreen() {
  const router = useRouter();
  // 'useLocalSearchParams' lee el [id] (ej. "213") de la URL
  const { id } = useLocalSearchParams(); 

  // --- Aquí harías una llamada a tu backend de Go con el 'id' ---
  // const { data: solicitud, isLoading } = useQuery(['solicitud', id], fetchSolicitud);
  // Por ahora, usamos los datos de la captura
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Configura la barra de título con la flecha de atrás */}
      <Stack.Screen 
        options={{ 
          headerShown: true, 
          title: 'Resumen de solicitud',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'white' }
        }} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Mueble de cocina</Text>
        <Text style={styles.info}>
          <Text style={styles.infoLabel}>Trabajador a cargo: </Text>
          Esteban Tamayo
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoLabel}>Fecha entrega: </Text>
          20/09/2025
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoLabel}>Dirección: </Text>
          Calle las rosas 37, Viña del Mar.
        </Text>
        
        {/* Placeholder del Mapa */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>[Aquí va el componente de Mapa]</Text>
        </View>

        <Text style={styles.infoLabel}>Descripción:</Text>
        <Text style={styles.info}>
          Necesito un mueble de cocina para mi casa, que sea de 2 puertas y .. 
          <Text style={styles.verMas}> Ver más</Text>
        </Text>

      </ScrollView>

      {/* Botones fijos al final */}
      <View style={styles.footer}>
        {/* 👇 AQUÍ ESTÁ EL BOTÓN ACTUALIZADO 👇 */}
        <TouchableOpacity 
          style={styles.buttonSolid}
          onPress={() => router.push(`/estado-solicitud/${id}`)} // Navega a la pantalla de estado
        >
          <Text style={styles.buttonText}>Consultar estado</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.buttonTextOutline}>Consultar perfil de trabajador</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContent: { 
    padding: 20,
    paddingBottom: 150, // Espacio para los botones fijos
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 15,
    color: '#2C3E50',
  },
  info: { 
    fontSize: 16, 
    color: '#34495E', 
    marginBottom: 12,
    lineHeight: 22,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#EAECEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  mapText: {
    color: '#7F8C8D',
    fontSize: 16,
  },
  verMas: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
  // Contenedor de botones al final
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 30, // Más espacio en el fondo
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    gap: 15,
  },
  buttonSolid: {
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
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#3498DB',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonTextOutline: {
    color: '#3498DB',
    fontSize: 16,
    fontWeight: 'bold',
  },
});