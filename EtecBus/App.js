import React, {useState, useEffect, useRef } from 'react';
import { TouchableOpacity, ActivityIndicator, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

// Configurações fixas - locais
const SCHOOL = {
  id: 'school',
  name: 'ETEC Comendador João Rays',
  coordinate: {},
  address: 'Rua Ludovico Victório, 2140, Barra Bonita - SP'
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Oie!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
