// 🎯 ARCHIVO: app/(tabs)/solicitudes.tsx (CON BOTONES FUNCIONALES)

import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

// Datos de ejemplo
const activeRequests = [
  {
    id: '1',
    date: '20/09/2025',
    jobNumber: '#213',
    title: 'Mueble cocina',
    location: 'Calle las rosas 37, Viña del Mar',
    distance: '2km',
  }
];

export default function SolicitudesScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Pendientes');
  const tabs = ['Pendientes', 'En curso', 'Historial'];
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Solicitudes</Text>

        {/* Pestañas de filtro */}
        <View style={styles.tabContainer}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Barra de Búsqueda */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar solicitud"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>1 Solicitud activa</Text>
          <Text style={styles.listStatus}>En progreso ▼</Text>
        </View>

        {activeRequests.map(request => (
          <View key={request.id} style={styles.requestCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardDate}>{request.date}</Text>
              <Text style={styles.cardJobNumber}>{request.jobNumber}</Text>
            </View>
            <Text style={styles.cardTitle}>{request.title}</Text>
            <Text style={styles.cardLocation}>
              <Ionicons name="location-pin" size={14} color="#7F8C8D" />
              {' '}{request.location}, <Text style={{color: '#3498DB'}}>{request.distance}</Text>
            </Text>
            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonOutline]}
                onPress={() => router.push({
                  pathname: '/(tabs)/editar-solicitud',
                  params: { requestId: request.id }
                })}
              >
                <Text style={[styles.buttonText, styles.buttonTextOutline]}>Editar</Text>
              </TouchableOpacity>
              
              {/* --- ¡AQUÍ ESTÁ LA CORRECCIÓN! --- */}
              <TouchableOpacity
                style={[styles.button, styles.buttonSolid]}
                // Añadimos la propiedad onPress para abrir el modal de cancelación
                onPress={() => router.push({
                  pathname: '/cancelar-solicitud-modal', // La ruta al modal
                  params: { requestId: request.id } // Pasamos el ID de la solicitud
                })}
              >
                <Text style={styles.buttonText}>Cancelar solicitud</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  scrollContent: { padding: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#2C3E50', textAlign: 'center', marginBottom: 20 },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#EAECEE',
    borderRadius: 20,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 18,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tabText: {
    color: '#7F8C8D',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAECEE',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listStatus: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  requestCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  cardJobNumber: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginVertical: 5,
  },
  cardLocation: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3498DB',
  },
  buttonSolid: {
    backgroundColor: '#3498DB',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  buttonTextOutline: {
    color: '#3498DB',
  },
});