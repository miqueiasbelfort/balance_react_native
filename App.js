import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Home from "./src/pages/Home"

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  }
})
