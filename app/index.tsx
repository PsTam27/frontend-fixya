// app/index.tsx (Usando require() en línea para todas las imágenes)

import { Link } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType, // Necesitamos este tipo para 'image'
} from 'react-native';

// Ya no hay importaciones de imágenes aquí

const { width } = Dimensions.get('window');

// Definimos el tipo para nuestros slides
type Slide = {
  id: string;
  type: 'logos' | 'image';
  title: string;
  image?: ImageSourcePropType; // La imagen es opcional
};

// --- CAMBIO 1: CARGAMOS LAS IMÁGENES CON REQUIRE() DENTRO DE LOS DATOS ---
const slides: Slide[] = [
  { id: '1', type: 'logos', title: 'Soluciones rápidas y confiables para tu hogar' },
  { id: '2', type: 'image', image: require('../assets/images/maestros.jpeg'), title: 'Con FixYa podrás encontrar personal capacitado para realizar un trabajo' },
  { id: '3', type: 'image', image: require('../assets/images/map.jpeg'), title: 'Agenda o coordina tu visita' },
];

const OnboardingSlide = ({ item }: { item: Slide }) => {
  return (
    <View style={styles.slide}>
      {item.type === 'logos' ? (
        <>
          {/* --- CAMBIO 2: USAMOS REQUIRE() DIRECTAMENTE AQUÍ --- */}
          <Image source={require('../assets/images/logo.jpeg')} style={styles.logo} />
          
          <Text style={styles.title}>{item.title}</Text>
          
          {/* Asegúrate de tener este archivo 'servicsat.jpeg' en tu carpeta */}
          <Image source={require('../assets/images/servicsat.jpeg')} style={styles.logo} />
        </>
      ) : (
        <>
          {/* Esta parte ahora funciona automáticamente porque los datos en 'slides' ya tienen la imagen cargada */}
          <Image source={item.image} style={styles.slideImage} />
          <Text style={styles.title}>{item.title}</Text>
          
          {item.id === '3' && (
            <Link href="/(auth)" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Comenzar</Text>
              </TouchableOpacity>
            </Link>
          )}
        </>
      )}
    </View>
  );
};

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />
    </SafeAreaView>
  );
}

// Los estilos no cambian
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  slide: { width: width, flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  logo: { width: 150, height: 150, resizeMode: 'contain', marginBottom: 20, borderRadius: 25 },
  slideImage: { width: '100%', height: 300, resizeMode: 'cover', borderRadius: 20, marginBottom: 40 },
  title: { fontSize: 20, fontWeight: '500', color: '#34495E', textAlign: 'center', marginVertical: 40 },
  button: { backgroundColor: '#3498DB', paddingVertical: 18, borderRadius: 30, alignItems: 'center', marginTop: 20, width: '100%' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});