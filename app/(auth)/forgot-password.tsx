// 🎯 ARCHIVO: app/(auth)/forgot-password.tsx (CON IMAGEN DEL CANDADO)

import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'; // 1. Importamos Image

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Enviando link de recuperación a:', email);
    // Aquí iría la lógica para llamar a tu backend de Go
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.headerTitle}>Recupera tu contraseña</Text>
        
        {/* --- ¡IMAGEN DEL CANDADO! --- */}
        {/* Asegúrate de que tienes un archivo 'lock.jpeg' en assets/images */}
        <Image source={require('../../assets/images/lock.jpeg')} style={styles.iconImage} />

        <Text style={styles.subtitle}>
          Ingresa el correo asociado a tu cuenta.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electronico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  mainContent: { flex: 1, justifyContent: 'center', paddingHorizontal: 40 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#2C3E50', textAlign: 'center', marginBottom: 40 },
  // --- NUEVO ESTILO PARA LA IMAGEN ---
  iconImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // O 'cover' si prefieres que la imagen llene el espacio
    alignSelf: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    fontSize: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 40,
  },
  button: { backgroundColor: '#3498DB', paddingVertical: 18, borderRadius: 30, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});