import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Camera from './components/Camera';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Camera />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
})