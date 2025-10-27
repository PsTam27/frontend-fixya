// 🎯 ARCHIVO: app/detalles-trabajo-maestro/[id].tsx (CON MODAL)

import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, SafeAreaView, 
  TouchableOpacity, ScrollView, Image,
  Modal, Pressable // 👇 1. Importamos Modal y Pressable
} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // 👇 1. Importamos Ionicons

// --- Textos completos (para el "Ver más") ---
const fullDescription = "El techo presenta evidentes filtraciones de agua durante la lluvia, cliente sospecha que el problema es una teja rota. Se necesita revisión completa y reemplazo de las partes dañadas para evitar futuras goteras.";
const fullMaterials = "Planchas de zinc, aluzinc o fibrocemento (según elección). Clavos, tornillos autoperforantes y arandelas de goma. Sellador de techo de alta calidad.";


export default function DetallesTrabajoScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 

  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isMatExpanded, setIsMatExpanded] = useState(false);

  // 👇 2. Añadimos el estado para el modal
  const [modalVisible, setModalVisible] = useState(false);

  const handleAceptarTrabajo = () => {
    // Aquí iría tu lógica de API para aceptar el trabajo
    console.log('Trabajo Aceptado:', id);
    setModalVisible(false); // Cierra el modal
    router.back(); // Vuelve al dashboard
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* ... (Tu Stack.Screen y ScrollView no cambian) ... */}
      <Stack.Screen 
        options={{ 
          headerShown: true, 
          title: 'Detalles trabajo',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'white' }
        }} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ... (Toda la info del trabajo no cambia) ... */}
        
        <Text style={styles.jobInfo}>Trabajo #{id}</Text>
        <Text style={styles.title}>Remodelación de techo</Text>
        <Text style={styles.location}>
          Calle las rosas 37, Viña del Mar, <Text style={styles.distance}>2km.</Text>
        </Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>[Aquí va el componente de Mapa]</Text>
        </View>
        <Text style={styles.sectionTitle}>Descripción:</Text>
        <Text style={styles.bodyText} numberOfLines={isDescExpanded ? undefined : 2} ellipsizeMode="tail">
          {fullDescription}
        </Text>
        <TouchableOpacity onPress={() => setIsDescExpanded(!isDescExpanded)}>
          <Text style={styles.verMas}>{isDescExpanded ? 'Ver menos' : 'Ver más'}</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Materiales:</Text>
        <Text style={styles.bodyText} numberOfLines={isMatExpanded ? undefined : 2} ellipsizeMode="tail">
          {fullMaterials}
        </Text>
        <TouchableOpacity onPress={() => setIsMatExpanded(!isMatExpanded)}>
          <Text style={styles.verMas}>{isMatExpanded ? 'Ver menos' : 'Ver más'}</Text>
        </TouchableOpacity>
        <View style={styles.finalInfoContainer}>
          <Text style={styles.workDuration}>3 días trabajo</Text>
          <Text style={styles.price}>$30.000</Text>
        </View>

        {/* --- NUEVO BOTÓN "ACEPTAR" --- */}
        <TouchableOpacity 
          style={styles.acceptButton}
          onPress={() => setModalVisible(true)} // 👇 3. Actualizamos el onPress
        >
          <Text style={styles.acceptButtonText}>Aceptar</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* --- 4. AÑADIMOS EL MODAL --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable 
          style={styles.modalOverlay} // Fondo oscuro semitransparente
          onPress={() => setModalVisible(false)} // Cierra al tocar fuera
        >
          <Pressable 
            style={styles.modalContent} 
            onPress={() => {}} // Evita que se cierre al tocar dentro
          >
            {/* Usamos un Ionicon similar al de tu foto */}
            <Ionicons name="thumbs-up-outline" size={70} color="#3498DB" style={{ marginBottom: 15 }} />
            
            <Text style={styles.modalTitle}>Aceptar trabajo?</Text>

            <TouchableOpacity 
              style={styles.modalButtonAccept} 
              onPress={handleAceptarTrabajo}
            >
              <Text style={styles.modalButtonTextAccept}>Aceptar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.modalButtonCancel}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonTextCancel}>CANCELAR</Text>
            </TouchableOpacity>

          </Pressable>
        </Pressable>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ... (Tus estilos existentes no cambian)
  container: { flex: 1, backgroundColor: 'white' },
  scrollContent: { 
    padding: 20,
    paddingBottom: 40,
  },
  jobInfo: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 5,
    marginTop: 10, 
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
    fontSize: 16, 
    marginTop: 5,
    paddingBottom: 10, 
  },
  finalInfoContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  workDuration: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50', 
    marginBottom: 20,
  },
  acceptButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // --- 👇 4. AÑADIMOS LOS ESTILOS DEL MODAL ---
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 25,
  },
  modalButtonAccept: {
    backgroundColor: '#3498DB',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  modalButtonTextAccept: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalButtonCancel: {
    marginTop: 15,
    padding: 10,
  },
  modalButtonTextCancel: {
    color: '#7F8C8D',
    fontSize: 14,
    fontWeight: 'bold',
  },
});