// 🎯 ARCHIVO: app/(tabs)/perfil.tsx

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Usaremos Ionicons para los íconos

// --- Componente Reutilizable para cada opción del menú ---
const ListItem = ({ icon, text, onPress }: { icon: any; text: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <View style={styles.listItemContent}>
        <Ionicons name={icon} size={24} color="#555" style={styles.listItemIcon} />
        <Text style={styles.listItemText}>{text}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

// --- Datos para el menú ---
const menuOptions = [
  { icon: 'wallet-outline', text: 'Mi billetera' },
  { icon: 'settings-outline', text: 'Configuración' },
  { icon: 'lock-closed-outline', text: 'Privacidad y seguridad' },
  { icon: 'document-text-outline', text: 'Solicitudes' },
  { icon: 'log-out-outline', text: 'Cerrar sesión' },
];

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* --- Header del Perfil --- */}
        <View style={styles.header}>
          <Image source={require('../../assets/images/map.jpeg')} style={styles.avatar} />
          <View>
            <Text style={styles.name}>Nicolas Henandez</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={24} color="#3498DB" />
          </TouchableOpacity>
        </View>

        {/* --- Tarjeta de Estadísticas --- */}
        <View style={styles.statsCard}>
          <Text style={styles.statsMainText}><Text style={{fontWeight: 'bold'}}>170</Text> Trabajos solicitados</Text>
          <Text style={styles.statsSubText}>Miembro desde 20/06/2020</Text>
          <Text style={styles.statsSubText}>Puntuación alta ⭐</Text>
        </View>

        {/* --- Menú de Opciones --- */}
        <View style={styles.menuContainer}>
          {menuOptions.map((option, index) => (
            <ListItem 
              key={index} 
              icon={option.icon} 
              text={option.text} 
              onPress={() => console.log(`Presionado: ${option.text}`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  scrollContent: { paddingHorizontal: 20, paddingTop: 20 },
  // Estilos del Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  // Estilos de la Tarjeta de Estadísticas
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  statsMainText: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 8,
  },
  statsSubText: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  // Estilos del Menú
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden', // Para que el borde de las listas se ajuste al radio
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemIcon: {
    marginRight: 15,
  },
  listItemText: {
    fontSize: 16,
    color: '#34495E',
  },
});