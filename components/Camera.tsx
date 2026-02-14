import { useCameraPermissions } from "expo-camera"
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export default function Camera() {
  const facing = 'back'
  const [permission, requestPermission] = useCameraPermissions()
  const [buttonIn, setButtonIn] = useState(false)

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
          <Pressable
            onPressIn={() => setButtonIn(true)}
            onPressOut={() => setButtonIn(false)}
          >
            <Text style={[styles.button, {backgroundColor: buttonIn ? '#002D4D' : '#004A80'}]}>
              Grant camera access
            </Text>
          </Pressable>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Text>Access granted</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  askContainer: {
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
  button: {
    marginTop: 10,
    padding: 8,
    borderRadius: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})