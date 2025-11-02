// 🎯 ARCHIVO: app/index.tsx (COMPLETO, con logos más grandes)

import { Link } from 'expo-router';
import React, { useState, useRef, useEffect } from 'react';
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
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Definimos el tipo para nuestros slides
type Slide = {
  id: string;
  type: 'logos' | 'image';
  title: string;
  image?: ImageSourcePropType;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: -10,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    
    animation.start();
    return () => animation.stop();
  }, []);

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
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      {currentIndex < slides.length - 1 && (
        <Animated.View style={[styles.swipeIndicator, { transform: [{ translateY: translateYAnim }] }]}>
          <Text style={styles.swipeText}>Desliza para continuar</Text>
          <Ionicons name="chevron-forward-outline" size={30} color="#7F8C8D" />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

// --- ESTILOS (ACTUALIZADO: LOGOS MÁS GRANDES) ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FA' },
  slide: { width: width, flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  // 👇 CAMBIO AQUÍ: aumentamos width, height y marginBottom
  logo: { width: 180, height: 180, resizeMode: 'contain', marginBottom: 30, borderRadius: 25 },
  slideImage: { width: '100%', height: 300, resizeMode: 'cover', borderRadius: 20, marginBottom: 40 },
  title: { fontSize: 20, fontWeight: '500', color: '#34495E', textAlign: 'center', marginVertical: 40 },
  button: { backgroundColor: '#3498DB', paddingVertical: 18, borderRadius: 30, alignItems: 'center', marginTop: 20, width: '100%' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  swipeIndicator: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    alignItems: 'center',
  },
  swipeText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 5,
  },
});