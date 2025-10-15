// 🎯 ARCHIVO: app/_layout.tsx

import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />      {/* El Onboarding */}
      <Stack.Screen name="(auth)" />     {/* La sección de Registro/Login */}
      <Stack.Screen name="(tabs)" />     {/* La sección del Usuario */}
      <Stack.Screen name="(maestro)" />  {/* La sección del Maestro */}
    </Stack>
  );
}