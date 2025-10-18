// 🎯 ARCHIVO: app/maestro-profile.tsx (CORREGIDO Y FUNCIONAL)

import React, { useState } from 'react'; 
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';

const maestroData = {
  id: '1',
  name: 'Camilo Apablaza Imbarack',
  specialty: 'Pintor especialista',
  rating: 4.5,
  completedJobs: 20,
  availability: 'Lunes a Viernes de 08:00 AM a 18:00 PM.',
  description: 'Pintor con alta especialidad en exteriores, con más de 5 años de experiencia, realizo todo tipo de trabajos en su hogar, desde empastes hasta aplicación de esmaltes sintéticos y pinturas epóxicas. Responsabilidad y limpieza garantizada.',
  avatar: require('../assets/images/user.jpeg'),
  portfolio: [
    require('../assets/images/maestros.jpeg'),
    require('../assets/images/maestros.jpeg'),
    require('../assets/images/maestros.jpeg'),
    require('../assets/images/maestros.jpeg'),
  ]
};

export default function MaestroProfileScreen() {
  const { maestroId } = useLocalSearchParams();
  
  // 2. Estado para controlar si el texto está expandido o no
  const [isExpanded, setIsExpanded] = useState(false);

  // 3. Función para cambiar el estado (mostrar más o menos texto)
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };


  console.log("Mostrando perfil para el Maestro ID:", maestroId);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: 'Perfil de maestro' }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <View style={styles.header}>
            <Image source={maestroData.avatar} style={styles.avatar} />
            <View style={styles.headerText}>
              <Text style={styles.name}>{maestroData.name}</Text>
              <Text style={styles.specialty}>{maestroData.specialty}</Text>
            </View>
          </View>
          
          <Text style={styles.infoTitle}>Disponibilidad</Text>
          <Text style={styles.infoText}>{maestroData.availability}</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Calificación general:</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{maestroData.rating.toFixed(1)}</Text>
              <Ionicons name="star" size={16} color="#FFC107" />
            </View>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Trabajos completados:</Text>
            <Text style={styles.completedJobs}>{maestroData.completedJobs}</Text>
          </View>

          
          <Text style={styles.description}>
            {/* Si está expandido, muestra el texto completo. Si no, lo corta. */}
            {isExpanded
              ? maestroData.description
              : `${maestroData.description.substring(0, 120)}... `
            }
            {/* El texto "Ver más/menos" que llama a la función para cambiar el estado */}
            <Text style={styles.seeMore} onPress={toggleText}>
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </Text>
          </Text>

          {/* ... (El resto del código del portafolio y botón no cambia) ... */}
          <Text style={styles.portfolioTitle}>Ver portafolio de trabajos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.portfolioContainer}>
            {maestroData.portfolio.map((img, index) => (
              <Image key={index} source={img} style={styles.portfolioImage} />
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.solicitarButton}>
            <Text style={styles.solicitarButtonText}>Solicitar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  scrollContent: { padding: 20 },
  profileCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#F0F0F0', paddingBottom: 20 },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  headerText: { flex: 1 },
  name: { fontSize: 20, fontWeight: 'bold' },
  specialty: { fontSize: 14, color: '#7F8C8D', marginTop: 4 },
  infoTitle: { fontSize: 14, color: '#333', fontWeight: 'bold' },
  infoText: { fontSize: 14, color: '#7F8C8D', marginBottom: 15 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  rating: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { fontSize: 16, fontWeight: 'bold', marginRight: 5 },
  completedJobs: { fontSize: 16, fontWeight: 'bold', color: '#34495E' },
  description: { fontSize: 14, color: '#7F8C8D', lineHeight: 20, marginVertical: 10 },
  seeMore: { color: '#3498DB', fontWeight: 'bold' },
  portfolioTitle: { fontSize: 14, color: '#333', fontWeight: 'bold', marginVertical: 15 },
  portfolioContainer: { flexDirection: 'row' },
  portfolioImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  solicitarButton: { backgroundColor: '#3498DB', paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginTop: 30 },
  solicitarButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});