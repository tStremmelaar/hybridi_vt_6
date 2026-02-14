import { CameraView, useCameraPermissions } from "expo-camera"
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import CustomButton from "./CustomButton"

export default function Camera() {
  const facing = 'back'
  const [permission, requestPermission] = useCameraPermissions()

  if (!permission) {
    // while permissions loading
    return <View />
  }

  if (!permission.granted) {
    // while permissions not granted
    return (
      <View style={styles.container}>
        <View style={styles.askContainer}>
          <Text style={styles.ask}>Need camera permission to scan barcodes</Text>
          <CustomButton
            text="Grant camera access"
            handlePress={() => requestPermission}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  askContainer: {
    alignSelf: 'flex-end',
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#0597FF',
  },
  ask: {
    fontSize: 20,
    textAlign: 'center',
  },
  camera: {
    flex: 1,
  }
})