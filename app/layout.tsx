// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      {/* La pantalla de inicio será el onboarding (el index.tsx de la raíz) */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* El grupo (auth) se trata como una sola pantalla aquí */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}