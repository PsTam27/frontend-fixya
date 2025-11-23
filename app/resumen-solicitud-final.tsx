import { Image } from "expo-image"
import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import React from "react"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import {
  SafeAreaView
} from "react-native-safe-area-context"
export default function ResumenSolicitudFinalScreen() {
  const router = useRouter()
  // Leemos los parámetros que vienen del formulario
  const {
          title,
          description,
          value,
          estimated_time,
          status,
          location_text,
          ends_at,
          complexity,
          imageUrls,
          imageCount
        }      = useLocalSearchParams()

  const handleFinalizar = () => {
    console.log( "Finalizando solicitud:", {
      title,
        description,
        value,
        estimated_time,
        status,
        location_text,
        ends_at,
        complexity,
        imageUrls,
        imageCount
    } )
    router.replace( "/(tabs)/" ) // O volver al inicio de usuario
  }

  return (
    <SafeAreaView style={ styles.container }>
      {/* Configura la barra de título con la flecha de atrás */ }
      <Stack.Screen
        options={ {
          headerShown        : true,
          title              : "Resumen de solicitud", // Título como en la imagen
          headerShadowVisible: false,
          headerStyle        : { backgroundColor: "white" }
        } }
      />

      <ScrollView contentContainerStyle={ styles.scrollContent }>
        {/* Mostramos los datos recibidos */ }
        <Text style={ styles.title }>{ title ||
          "Título no especificado" }</Text>
        <Text style={ styles.info }>
          <Text style={ styles.infoLabel }>Descripción: </Text>
          { description || "Descripción no especificada" }
        </Text>
        <Text style={ styles.info }>
          <Text style={ styles.infoLabel }>Fecha entrega: </Text>
          { ends_at || "Fecha no especificada" }
        </Text>
        <Text style={ styles.info }>
          <Text style={ styles.infoLabel }>Dirección: </Text>
          { location_text || "Dirección no especificada" }
        </Text>
        <Text style={ styles.info }>
          <Text style={ styles.infoLabel }>Estado: </Text>
          { status || "Pendiente" }
        </Text>

        <Text style={ styles.info }>
          <Text style={ styles.infoLabel }>Complejidad Estimada: </Text>
          { complexity || "No calculado" }
        </Text>
        <Text style={ styles.info }>
          <Text style={ styles.infoLabel }>Duración Estimada: </Text>
          { estimated_time || "No calculado" }
        </Text>

        <Text style={ styles.info }>
          <Text style={ styles.infoLabel }>Imagenes subidas: </Text>
            { imageCount || "Sin imagenes" }
        </Text>
          {typeof imageUrls === 'string' ? (
          <View style={styles.carouselContainer}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.carouselContent}
            >
              {imageUrls.split(',').map((url, index) => (
                <View key={`${url}-${index}`} style={styles.imageContainer}>
                  <Image
                    source={{ uri: url }}
                    style={styles.carouselImage}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        ) : null}
        {/* Placeholder del Mapa */ }
        <View style={ styles.mapPlaceholder }>
          <Text style={ styles.mapText }>[Aquí va el componente de Mapa]</Text>
        </View>

      </ScrollView>

      {/* Botón Finalizar fijo abajo */ }
      <View style={ styles.footer }>
        <Pressable style={ styles.finalizeButton } onPress={ handleFinalizar }>
          <Text style={ styles.finalizeButtonText }>Volver</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create( {
  container     : { flex: 1, backgroundColor: "white" },
  scrollContent : {
    padding      : 20,
    paddingBottom: 100 // Espacio para el botón fijo
  },
  title         : {
    fontSize    : 20, // Un poco más pequeño
    fontWeight  : "bold",
    marginBottom: 15,
    color       : "#2C3E50"
  },
  info          : {
    fontSize    : 16,
    color       : "#34495E",
    marginBottom: 10,
    lineHeight  : 22
  },
  infoLabel     : {
    fontWeight: "bold",
    color     : "#2C3E50"
  },
  mapPlaceholder: {
    height         : 200,
    backgroundColor: "#EAECEE",
    borderRadius   : 10,
    justifyContent : "center",
    alignItems     : "center",
    marginVertical : 20
  },
  mapText       : {
    color   : "#7F8C8D",
    fontSize: 16
  },
  // Footer y Botón Finalizar
  footer            : {
    position         : "absolute",
    bottom           : 0,
    left             : 0,
    right            : 0,
    backgroundColor  : "white",
    paddingVertical  : 15,
    paddingHorizontal: 20,
    borderTopWidth   : 1,
    borderTopColor   : "#F0F0F0"
  },
  finalizeButton    : {
    backgroundColor: "#3498DB",
    paddingVertical: 16,
    borderRadius   : 30,
    alignItems     : "center"
  },
  finalizeButtonText: {
    color     : "white",
    fontSize  : 16,
    fontWeight: "bold"
  },
  carouselContainer: {
    marginVertical: 10,
    height: 300, // Altura fija para el carrusel
  },
  carouselContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageContainer: {
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  carouselImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
} )