// 🎯 ARCHIVO: app/(tabs2)/index.tsx (REDISENADO)

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

// --- Simulación de Datos (actualizado a tu nuevo diseño) ---
const maestro = {
  nombre: 'Esteban',
  apellido: 'Carpintero',
  horasTrabajadas: 80,
  trabajosSiguientes: 4,
  trabajosCompletados: 20,
};

// --- Datos de oferta actualizados ---
const ofertas = [
  { 
    id: 212, // Trabajo #212
    titulo: 'Reparación fuga gas', 
    fecha: '20/09/25', 
    duracion: '1 día', 
    estado: 'Urgente', // Estado "Urgente"
    ubicacion: 'San alfonso 550, Viña del mar, 2km', 
    precio: '$50.000' 
  },
  { 
    id: 213, 
    titulo: 'Remodelación techo', 
    fecha: '20/09/25', 
    duracion: '3 días', 
    estado: 'Disponible', // Estado "Disponible"
    ubicacion: 'Calle las rosas 37, Viña del Mar, 2km.', 
    precio: '$30.000' 
  },
];

// --- Componente Reutilizable para las Tarjetas de Oferta (MODIFICADO) ---
const OfferCard = ({ oferta, router }: { oferta: (typeof ofertas)[0], router: any }) => {
  
  // Lógica condicional para la etiqueta (badge)
  const isUrgente = oferta.estado === 'Urgente';
  const badgeStyle = isUrgente ? styles.urgenteBadge : styles.disponibleBadge;
  const badgeTextStyle = isUrgente ? styles.urgenteText : styles.disponibleText;

  return (
    <View style={styles.card}>
      {/* Header de la tarjeta */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardDate}>{oferta.fecha}</Text>
        <Text style={styles.cardDuration}>{oferta.duracion}</Text>
        {/* Usamos los estilos condicionales */}
        <View style={badgeStyle}>
          <Text style={badgeTextStyle}>{oferta.estado}</Text>
        </View>
      </View>
      
      {/* Título */}
      <Text style={styles.cardTitle}>{oferta.titulo}</Text>
      
      {/* Ubicación */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={16} color="#555" />
        <Text style={styles.locationText}>{oferta.ubicacion}</Text>
      </View>
      
      {/* Footer de la tarjeta (MODIFICADO con 2 botones) */}
      <View style={styles.cardFooter}>
        <Text style={styles.price}>{oferta.precio}</Text>
        
        <View style={styles.cardButtonsContainer}>
          <TouchableOpacity 
            style={styles.buttonOutline} // Botón "Detalles" con borde
            onPress={() => router.push(`/detalles-trabajo-maestro/${oferta.id}`)}
          >
            <Text style={styles.buttonTextOutline}>Detalles</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonSolid} // Botón "Aceptar Trabajo" sólido
            onPress={() => console.log('Aceptar trabajo:', oferta.id)} // Lógica para aceptar
          >
            <Text style={styles.buttonTextSolid}>Aceptar Trabajo</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};


export default function MaestroDashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Ocultamos el header por defecto porque tenemos uno personalizado */}
      <Stack.Screen options={{ headerShown: false }} /> 
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* --- Header (adaptado de tu foto) --- */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image 
              // Reemplaza esta URI por tu imagen de avatar local (ej. require(...))
              source={{ uri: 'https://placehold.co/50x50/FAD7A0/C0392B?text=🧑' }} 
              style={styles.avatar} 
            />
            <View>
              <Text style={styles.greeting}>Bienvenido, <Text style={{ color: '#3498DB' }}>{maestro.nombre}</Text></Text>
              <Text style={styles.maestroSubtitle}>{maestro.apellido}</Text>
            </View>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="chatbubble-ellipses-outline" size={24} color="#555" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#555" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- Sección de Estadísticas (SIN CAMBIOS) --- */}
        <Text style={styles.hoursText}>Horas trabajadas: <Text style={{fontWeight: 'bold'}}>{maestro.horasTrabajadas}</Text></Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{maestro.trabajosSiguientes}</Text>
            <Text style={styles.statLabel}>Trabajos siguientes:</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{maestro.trabajosCompletados}</Text>
            <Text style={styles.statLabel}>Trabajos completados:</Text>
          </View>
        </View>

        {/* --- Sección de Ofertas (SIN CAMBIOS) --- */}
        <View style={styles.searchSection}>
            <Text style={styles.sectionTitle}>Ofertas disponibles</Text>
            <TouchableOpacity onPress={() => console.log('Ver todas las ofertas')}>
              <Text style={styles.seeAll}>Ver todas</Text>
            </TouchableOpacity>
        </View>
        
        {/* Lista de Ofertas (SIN CAMBIOS) */}
        {ofertas.map(oferta => (
          <OfferCard key={oferta.id} oferta={oferta} router={router} />
        ))}

        {/* --- Sección En Progreso (SIN CAMBIOS) --- */}
        <View style={styles.searchSection}>
            <Text style={styles.sectionTitle}>En progreso</Text>
        </View>
        <View style={[styles.card, styles.inProgressCard]}>
          <Text style={styles.inProgressText}>Aún no tienes trabajos en progreso.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// --- Estilos adaptados de tu código y de la foto ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  scrollContent: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  greeting: { fontSize: 16, fontWeight: '500', color: '#2C3E50' },
  maestroSubtitle: { fontSize: 14, color: '#7F8C8D' },
  headerIcons: { flexDirection: 'row' },
  icon: { fontSize: 24, marginLeft: 15 },
  
  hoursText: {
    fontSize: 14,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statNumber: { fontSize: 22, fontWeight: 'bold', color: '#3498DB' },
  statLabel: { fontSize: 14, color: '#555' },
  
  searchSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2C3E50' },
  seeAll: { fontSize: 14, color: '#3498DB', fontWeight: 'bold' },
  
  card: { 
    backgroundColor: 'white', 
    padding: 15, 
    borderRadius: 15, 
    marginBottom: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 3 
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardDate: { fontSize: 12, color: '#7F8C8D' },
  cardDuration: { fontSize: 12, color: '#7F8C8D', marginLeft: 10 },
  
  // --- ESTILOS DE BADGE (ETIQUETA) MODIFICADOS ---
  disponibleBadge: {
    backgroundColor: '#E0F7FA', // Color celeste claro
    borderRadius: 15, // Más redondeado
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginLeft: 'auto',
  },
  disponibleText: { 
    color: '#00838F', 
    fontSize: 12, 
    fontWeight: 'bold' 
  },
  urgenteBadge: { // NUEVO
    backgroundColor: '#E74C3C', // Rojo
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginLeft: 'auto',
  },
  urgenteText: { // NUEVO
    color: 'white', 
    fontSize: 12, 
    fontWeight: 'bold' 
  },
  // --- FIN ESTILOS DE BADGE ---

  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#34495E', marginBottom: 10 },
  locationContainer: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 15 },
  locationText: { fontSize: 14, color: '#555', flexShrink: 1 },
  
  // --- ESTILOS DE FOOTER DE TARJETA MODIFICADOS ---
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 15, // Más padding
  },
  price: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#2C3E50' // Color cambiado de verde a oscuro
  },
  cardButtonsContainer: { // NUEVO
    flexDirection: 'row',
    gap: 10,
  },
  buttonOutline: { // NUEVO (antes 'detailsButton')
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3498DB',
  },
  buttonTextOutline: { // NUEVO (antes 'detailsButtonText')
    color: '#3498DB', 
    fontWeight: 'bold',
    fontSize: 12,
  },
  buttonSolid: { // NUEVO
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  buttonTextSolid: { // NUEVO
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 12,
  },
  // --- FIN ESTILOS DE FOOTER ---
  
  inProgressCard: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderWidth: 1,
    borderColor: '#EAECEE',
    backgroundColor: '#FDFEFE'
  },
  inProgressText: { fontSize: 14, color: '#7F8C8D' },
});