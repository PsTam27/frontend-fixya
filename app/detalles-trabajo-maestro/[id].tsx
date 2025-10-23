// 🎯 ARCHIVO: app/detalles-trabajo-maestro/[id].tsx (NUEVO)

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

export default function DetallesTrabajoScreen() {
  const router = useRouter();
  // 'useLocalSearchParams' lee el [id] (ej. "213") de la URL
  const { id } = useLocalSearchParams(); 

  // --- Aquí harías una llamada a tu backend de Go con el 'id' ---
  // const { data: trabajo, isLoading } = useQuery(['trabajo', id], fetchTrabajo);
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Configura la barra de título con la flecha de atrás */}
      <Stack.Screen 
        options={{ 
          headerShown: true, 
          title: 'Detalles trabajo',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'white' }
        }} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Encabezado de la tarjeta */}
        <View style={styles.cardHeader}>
          <Text style={styles.dateInfo}>20/09/2025</Text>
          <Text style={styles.dateInfo}>3 días</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Disponible</Text>
          </View>
        </View>
        
        <Text style={styles.jobInfo}>Trabajo #{id}</Text>
        <Text style={styles.title}>Remodelación de techo</Text>
        
        <Text style={styles.location}>
          Calle las rosas 37, Viña del Mar, <Text style={styles.distance}>2km.</Text>
        </Text>
        
        {/* Placeholder del Mapa */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>[Aquí va el componente de Mapa]</Text>
        </View>

        {/* Descripción */}
        <Text style={styles.sectionTitle}>Descripción:</Text>
        <Text style={styles.bodyText}>
          El techo presenta evidentes filtraciones de agua durante la lluvia, cliente sospecha que el problema .. 
          <Text style={styles.verMas}> Ver más</Text>
        </Text>

        {/* Materiales */}
        <Text style={styles.sectionTitle}>Materiales:</Text>
        <Text style={styles.bodyText}>
          Planchas de zinc, aluzinc o fibrocemento (según elección).
          Clavos, tornillos autoperforantes y arandelas de goma.. 
          <Text style={styles.verMas}> Ver más</Text>
        </Text>

      </ScrollView>

      {/* Aquí podrías agregar botones fijos si los necesitas */}
      {/* <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonSolid}>
          <Text style={styles.buttonText}>Aceptar trabajo</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContent: { 
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 8,
  },
  dateInfo: {
    fontSize: 14,
    color: '#555',
  },
  statusBadge: {
    backgroundColor: '#D6EAF8', // Azul claro
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusText: {
    color: '#3498DB', // Azul
    fontWeight: 'bold',
    fontSize: 12,
  },
  jobInfo: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: '#2C3E50',
  },
  location: { 
    fontSize: 16, 
    color: '#34495E', 
    marginBottom: 15,
  },
  distance: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#EAECEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  mapText: {
    color: '#7F8C8D',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 15,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    color: '#34495E',
    lineHeight: 22,
  },
  verMas: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
  // Estilos para un botón fijo (descomentar si se usa)
  // footer: {
  //   padding: 20,
  //   borderTopWidth: 1,
  //   borderTopColor: '#F0F0F0',
  // },
  // buttonSolid: {
  //   backgroundColor: '#3498DB',
  //   paddingVertical: 16,
  //   borderRadius: 30,
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
});