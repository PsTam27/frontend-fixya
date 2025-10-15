// 🎯 ARCHIVO: app/(tabs)/buscar-maestros.tsx

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

// Datos de ejemplo para la lista de maestros
const maestros = [
  {
    id: '1',
    name: 'Camilo Apablaza',
    specialty: 'Pintor especialista',
    rating: 4.5,
    availability: 'Lunes a Viernes de 08:00 AM a 18:00 PM',
    avatar: require('../../assets/images/map.jpeg'), // Reemplaza con el avatar correcto
  },
  {
    id: '2',
    name: 'Esteban Tamayo',
    specialty: 'Pintor enfocado en interiores',
    rating: 5.0,
    availability: 'Lunes a Miercoles de 08:00 AM a 18:00 PM',
    avatar: require('../../assets/images/maestros.jpeg'), // Reemplaza con el avatar correcto
  },
];

// Componente reutilizable para cada tarjeta de maestro
const MaestroCard = ({ maestro }: { maestro: typeof maestros[0] }) => {
  return (
    <View style={styles.maestroCard}>
      <View style={styles.cardHeader}>
        <Image source={maestro.avatar} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.maestroName}>{maestro.name}</Text>
          <Text style={styles.maestroSpecialty}>{maestro.specialty}</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{maestro.rating.toFixed(1)}</Text>
          <Ionicons name="star" size={16} color="#FFC107" />
        </View>
      </View>
      <View style={styles.availability}>
        <Text style={styles.availabilityTitle}>Disponibilidad</Text>
        <Text style={styles.availabilityText}>{maestro.availability}</Text>
      </View>
      <TouchableOpacity style={styles.profileButton}>
        <Text style={styles.profileButtonText}>Ver perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function BuscarMaestrosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Usamos Stack.Screen para configurar el header de esta pantalla específica */}
      <Stack.Screen options={{ headerShown: true, title: 'Buscar maestros' }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pintor"
            placeholderTextColor="#999"
          />
        </View>

        <Text style={styles.resultsTitle}>Resultados de búsqueda:</Text>

        {maestros.map(maestro => (
          <MaestroCard key={maestro.id} maestro={maestro} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  scrollContent: { padding: 20 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EAECEE', borderRadius: 10, paddingHorizontal: 15, marginBottom: 30 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, paddingVertical: 15, fontSize: 16 },
  resultsTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  maestroCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  headerText: { flex: 1 },
  maestroName: { fontSize: 18, fontWeight: 'bold' },
  maestroSpecialty: { fontSize: 14, color: '#7F8C8D' },
  rating: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { fontSize: 16, fontWeight: 'bold', marginRight: 5 },
  availability: { marginBottom: 20 },
  availabilityTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  availabilityText: { fontSize: 14, color: '#7F8C8D' },
  profileButton: { backgroundColor: '#3498DB', paddingVertical: 12, borderRadius: 25, alignItems: 'center' },
  profileButtonText: { color: 'white', fontWeight: 'bold' },
});