// 🎯 ARCHIVO: app/(tabs2)/perfil-maestro.tsx (DISEÑO FINAL)

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

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

// --- Datos de ejemplo (basados en la foto) ---
const maestroInfo = {
  nombre: 'Esteban',
  apellido: 'Tamayo',
  rol: 'Carpintero',
  trabajosCompletados: 170,
  miembroDesde: '20/06/2020',
};

// --- Opciones del menú (basadas en la foto) ---
const menuOptions = [
  { icon: 'wallet-outline', text: 'Mi billetera', route: '/(maestro)/informacion-bancaria'}, // Revisa si esta ruta es correcta
  { icon: 'document-attach-outline', text: 'Documentos', route: '/documentos-maestro' },
  { icon: 'settings-outline', text: 'Configuración' },
  { icon: 'lock-closed-outline', text: 'Privacidad y seguridad' },
  { icon: 'log-out-outline', text: 'Cerrar sesión' },
];

export default function PerfilMaestroScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* --- Configura la barra de título --- */}
      <Stack.Screen
        options={{
          headerShown: true,
          title: '', // Sin título en el header
          headerRight: () => ( // Botón de lápiz a la derecha
            <TouchableOpacity
              // Navega a la pantalla de edición
              onPress={() => router.push('/informacion-personaluser-edit')} // Asegúrate que esta ruta exista en app/
            >
              <Ionicons name="create-outline" size={24} color="#3498DB" style={{ marginRight: 15 }}/>
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#F7F8FA' }
        }}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* --- Header del Perfil --- */}
        <View style={styles.profileHeader}>
          <Image
            // Reemplaza con tu imagen de avatar
            source={{ uri: 'https://placehold.co/60x60/FAD7A0/C0392B?text=🧑' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>{maestroInfo.nombre} {maestroInfo.apellido}</Text>
            <Text style={styles.role}>{maestroInfo.rol}</Text>
          </View>
        </View>

        {/* --- Tarjeta de Estadísticas (Estilos ajustados) --- */}
        <View style={styles.statsCard}>
          <Text style={styles.statsMainText}>
            <Text style={{fontWeight: 'bold'}}>{maestroInfo.trabajosCompletados}</Text> Trabajos completados
          </Text>
          <Text style={styles.statsSubText}>Miembro desde {maestroInfo.miembroDesde}</Text>
          {/* 👇 Texto "Calidad alta" ajustado */}
          <Text style={styles.qualityText}>Calidad alta ⭐</Text>
          {/* 👇 Enlace "Ver reseñas" ajustado */}
          <TouchableOpacity onPress={() => console.log('Ver reseñas')}>
            <Text style={styles.reviewLink}>Ver reseñas</Text>
          </TouchableOpacity>
        </View>

        {/* --- Menú de Opciones --- */}
        <View style={styles.menuContainer}>
          {menuOptions.map((option, index) => (
            <ListItem
              key={index}
              icon={option.icon}
              text={option.text}
              onPress={() => {
                if (option.route) {
                  router.push(option.route as any);
                } else {
                  console.log(`Presionado: ${option.text}`);
                }
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- ESTILOS ACTUALIZADOS ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  scrollContent: { paddingHorizontal: 20, paddingTop: 10 },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  role: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 20, // Padding vertical
    paddingHorizontal: 15, // Padding horizontal
    alignItems: 'center', // Centra todo el contenido
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
    textAlign: 'center', // Centrado
  },
  statsSubText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 8, // Más espacio
    textAlign: 'center', // Centrado
  },
  // 👇 Estilo para "Calidad alta"
  qualityText: {
    fontSize: 16, // Más grande
    color: '#2C3E50',
    fontWeight: 'bold', // Negrita
    marginBottom: 15, // Más espacio debajo
    textAlign: 'center',
  },
  // 👇 Estilo para "Ver reseñas"
  reviewLink: {
    fontSize: 14,
    color: '#3498DB',
    fontWeight: 'bold',
    // Quitamos marginTop para que el padding de la tarjeta controle el espacio
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
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