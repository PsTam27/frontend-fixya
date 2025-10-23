// 🎯 ARCHIVO: app/(tabs2)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

export default function TabLayoutMaestro() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3498DB', // Color de ícono y texto activo
        tabBarInactiveTintColor: '#7F8C8D', // Color de ícono y texto inactivo
        tabBarShowLabel: true, // Mostrar el texto debajo del ícono
        tabBarStyle: {
          height: 80, // Ajusta la altura de la barra si es necesario
          paddingTop: 10,
          paddingBottom: 15,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
        },
        tabBarLabelStyle: {
          fontSize: 12, // Tamaño del texto de la etiqueta
          fontWeight: '600',
        },
        headerShown: false, // Ocultar el encabezado por defecto, cada pantalla puede definir el suyo
      }}
    >
      {/* --- Pestaña: Trabajos (como en tu Imagen 2) --- */}
      <Tabs.Screen
        name="Historial" // Nombre del archivo: app/(tabs2)/trabajos.tsx
        options={{
          title: 'Trabajos',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons 
                name={focused ? "add-circle" : "add-circle-outline"} // Ícono de "Trabajos" con "+"
                size={26} 
                color={color} 
              />
              {/* <Text style={{ color: color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>Trabajos</Text> */}
            </View>
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color: color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>Trabajos</Text>
          ),
        }}
      />

      {/* --- Pestaña: Historial (un ejemplo, ajusta el nombre del archivo) --- */}
      <Tabs.Screen
        name="historial-maestro" // Nombre del archivo: app/(tabs2)/historial-maestro.tsx
        options={{
          title: 'Historial',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons 
                name={focused ? "checkmark-circle" : "checkmark-circle-outline"} // Ícono de "checkmark"
                size={26} 
                color={color} 
              />
            </View>
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color: color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>Historial</Text>
          ),
        }}
      />

      {/* --- Pestaña: Pagos (un ejemplo, ajusta el nombre del archivo) --- */}
      <Tabs.Screen
        name="pagos-maestro" // Nombre del archivo: app/(tabs2)/pagos-maestro.tsx
        options={{
          title: 'Pagos',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons 
                name={focused ? "card" : "card-outline"} // Ícono de "tarjeta"
                size={26} 
                color={color} 
              />
            </View>
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color: color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>Pagos</Text>
          ),
        }}
      />

      {/* --- Pestaña: Perfil (un ejemplo, ajusta el nombre del archivo) --- */}
      <Tabs.Screen
        name="perfil-maestro" // Nombre del archivo: app/(tabs2)/perfil-maestro.tsx
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons 
                name={focused ? "person" : "person-outline"} // Ícono de "persona"
                size={26} 
                color={color} 
              />
            </View>
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color: color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>Perfil</Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
});