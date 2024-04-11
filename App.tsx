import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Temperature from './components/Temperature'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Temperature size='sm' temperature='67' />
      <Temperature size='md' temperature='67' />
      <Temperature size='lg' temperature='67' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
