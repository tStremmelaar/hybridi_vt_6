import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Scanner from './components/Scanner';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Scanner />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
})