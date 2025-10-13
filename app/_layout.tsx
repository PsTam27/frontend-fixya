// 🎯 ARCHIVO: app/_layout.tsx (CORREGIDO)

import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      {/* Estas son las secciones de más alto nivel que tu app conoce */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      
      {/* --- LÍNEAS AÑADIDAS PARA SOLUCIONAR EL ERROR --- */}
      {/* Le decimos al navegador que las secciones del usuario y del maestro existen */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(maestro)" options={{ headerShown: false }} />
    </Stack>
  );
}