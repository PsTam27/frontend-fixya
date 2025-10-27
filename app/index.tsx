// 🎯 ARCHIVO: app/index.tsx (COMPLETO, con flecha condicional)

import { Link } from 'expo-router';
import React, { useState, useRef, useEffect } from 'react'; // Importamos hooks
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  ImageSourcePropType, 
  Animated, // Importamos Animated
  Easing, // Importamos Easing
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importamos Ionicons

const { width } = Dimensions.get('window');

// Definimos el tipo para nuestros slides
type Slide = {
  id: string;
  type: 'logos' | 'image';
  title: string;
  image?: ImageSourcePropType; // La imagen es opcional
};

// --- Datos de los slides (sin cambios) ---
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
          <Image source={require('../assets/images/logo.jpeg')} style={styles.logo} />
          <Text style={styles.title}>{item.title}</Text>
          <Image source={require('../assets/images/servicsat.jpeg')} style={styles.logo} />
        </>
      ) : (
        <>
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
  // --- AÑADIDO: Estado para saber el slide actual ---
  const [currentIndex, setCurrentIndex] = useState(0);
  // --- AÑADIDO: Ref para la animación ---
  const translateYAnim = useRef(new Animated.Value(0)).current;

  // --- AÑADIDO: Animación de la flecha ---
  useEffect(() => {
    // Definimos la animación
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: -10, // Sube 10px
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0, // Baja a 0
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    
    // Inicia la animación
    animation.start();

    // Detiene la animación cuando el componente se desmonta
    return () => animation.stop(); 
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  // --- AÑADIDO: Función para actualizar el índice ---
  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

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
        onViewableItemsChanged={onViewableItemsChanged} // Añadido
        viewabilityConfig={viewabilityConfig}       // Añadido
      />

      {/* --- AÑADIDO: FLECHA DESLIZANTE (CONDICIONAL) --- */}
      {/* Solo se muestra si NO estamos en la última slide */}
      {currentIndex < slides.length - 1 && (
        <Animated.View style={[styles.swipeIndicator, { transform: [{ translateY: translateYAnim }] }]}>
          <Text style={styles.swipeText}>Desliza para continuar</Text>
          <Ionicons name="chevron-forward-outline" size={30} color="#7F8C8D" />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

// --- ESTILOS (AÑADIMOS LOS DE LA FLECHA AL FINAL) ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  slide: { width: width, flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  logo: { width: 150, height: 150, resizeMode: 'contain', marginBottom: 20, borderRadius: 25 },
  slideImage: { width: '100%', height: 300, resizeMode: 'cover', borderRadius: 20, marginBottom: 40 },
  title: { fontSize: 20, fontWeight: '500', color: '#34495E', textAlign: 'center', marginVertical: 40 },
  button: { backgroundColor: '#3498DB', paddingVertical: 18, borderRadius: 30, alignItems: 'center', marginTop: 20, width: '100%' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  // --- AÑADIDO: Estilos de la flecha deslizante ---
  swipeIndicator: {
    position: 'absolute', // Posición fija sobre el FlatList
    bottom: 50, // A 50px del fondo
    alignSelf: 'center', // Centrado horizontalmente
    alignItems: 'center',
  },
  swipeText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 5,
  },
});