// 🎯 ARCHIVO: app/resumen-solicitud/[id].tsx (CON NAVEGACIÓN A PERFIL MAESTRO)

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

export default function ResumenSolicitudScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 

  // --- Datos de ejemplo ---
  // 👇 NECESITAS OBTENER EL ID DEL MAESTRO ASIGNADO A ESTA SOLICITUD (ej: 'maestro123')
  const maestroId = 'maestro123'; // Reemplaza esto con el ID real

  const solicitud = {
      titulo: 'Mueble de cocina',
      trabajadorNombre: 'Esteban Tamayo', // Nombre del trabajador
      fechaEntrega: '20/09/2025',
      direccionCompleta: 'Calle las rosas 37, Viña del Mar.',
      descripcionCorta: 'Necesito un mueble de cocina para mi casa, que sea de 2 puertas y ..',
      // ... otros datos de la solicitud
  };
  
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
        <Text style={styles.title}>{solicitud.titulo}</Text>
        <Text style={styles.info}>
          <Text style={styles.infoLabel}>Trabajador a cargo: </Text>
          {solicitud.trabajadorNombre}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoLabel}>Fecha entrega: </Text>
          {solicitud.fechaEntrega}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoLabel}>Dirección: </Text>
          {solicitud.direccionCompleta}
        </Text>
        
        {/* Placeholder del Mapa */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>[Aquí va el componente de Mapa]</Text>
        </View>

        <Text style={styles.infoLabel}>Descripción:</Text>
        <Text style={styles.info}>
          {solicitud.descripcionCorta}
          <Text style={styles.verMas}> Ver más</Text>
        </Text>

      </ScrollView>

      {/* Botones fijos al final */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.buttonSolid}
          onPress={() => router.push(`/estado-solicitud/${id}`)} 
          
        >
          <Text style={styles.buttonText}>Consultar estado</Text>
        </TouchableOpacity>
        
        {/* 👇 AQUÍ ESTÁ EL CAMBIO 👇 */}
        <TouchableOpacity 
          style={styles.buttonOutline}
          // Navega a la ruta dinámica del perfil del maestro usando su ID
          onPress={() => router.push(`/maestro-profile/${maestroId}`)} 
        >
          <Text style={styles.buttonTextOutline}>Consultar perfil de trabajador</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --- ESTILOS (Sin cambios estructurales) ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContent: { 
    padding: 20,
    paddingBottom: 150, 
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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 30, 
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