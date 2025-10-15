// 🎯 ARCHIVO: app/_layout.tsx

import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(maestro)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="remodelaciones-form" 
        options={{
          headerShown: true,
          title: 'Formulario de remodelaciones',
          presentation: 'modal',
        }} 
      />
      
      {/* --- AÑADE ESTA PANTALLA --- */}
      <Stack.Screen 
        name="remodelaciones-form-step2" 
        options={{
          headerShown: true,
          title: 'Formulario de remodelaciones',
        }} 
      />

      <Stack.Screen 
        name="solicitud-enviada" 
        options={{
          headerShown: false, // No queremos barra de título en el modal
          presentation: 'transparentModal', // ¡Esta es la magia!
          animation: 'fade', // Una animación sutil
        }} 
      />
    </Stack>
  );
}