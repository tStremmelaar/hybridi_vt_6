import { BarcodeSettings, CameraView, useCameraPermissions } from "expo-camera"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import CustomButton from "./CustomButton"

export default function Scanner() {
  const facing = 'back'
  const scanningText = 'Scanning...'
  const barcodeSettings: BarcodeSettings = {
    barcodeTypes: ['ean13'], 
  }
  const [permission, requestPermission] = useCameraPermissions()
  const [scanText, setScanText] = useState(scanningText)
  const [receivingBarcodes, setReceivingBarcodes] = useState(true)

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
            text="Grant permission"
            handlePress={requestPermission}
          />
        </View>
      </View>
    )
  }

  function handleScanAgain() {
    setReceivingBarcodes(true)
    setScanText(scanningText)
  }

  function handleBarcodeScanned(code: string) {
    if (receivingBarcodes) {
      const beginning = code.substring(0, 1)
      const middle = code.substring(1, 6)
      const end = code.substring(-6, 6)
      setReceivingBarcodes(false)
      setScanText(`Barcode: ${beginning} ${middle} ${end}`)
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        barcodeScannerSettings={barcodeSettings}
        onBarcodeScanned={(result) => handleBarcodeScanned(result.data)}
        facing={facing}
      />
      <View style={styles.scanDialog}>
        <Text style={styles.scanText}>{scanText}</Text>
        {!(scanText.match(scanningText)) ? (
          <CustomButton
            text="Scan again"
            handlePress={handleScanAgain}
          />
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
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
  camera: {
    flex: 1,
  },
  scanDialog: {
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#000000a6',
    position: 'absolute',
    bottom: 0,
  },
  scanText: {
    color: '#fff',
    fontSize: 24,
  }
})