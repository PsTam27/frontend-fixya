// 🎯 ARCHIVO: app/(auth)/(worker-register)/_layout.tsx (CON CORRECCIÓN)

import { Stack } from 'expo-router';
import React from 'react';

export default function WorkerRegisterLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="step1"
        options={{
          headerShown: true,
          title: 'Registro',
          headerBackTitle: 'Atrás',
        }}
      />
      <Stack.Screen
        name="step2"
        options={{
          headerShown: true,
          title: 'Registro',
          headerBackTitle: 'Atrás',
        }}
      />
      {/* --- ¡AQUÍ ESTÁ EL CAMBIO! --- */}
      {/* Hemos quitado la opción 'presentation: "modal"' */}
      <Stack.Screen
        name="success"
        options={{
          headerShown: false, 
        }}
      />
    </Stack>
  );
}