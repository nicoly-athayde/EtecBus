import React, {useState, useEffect, useRef } from 'react';
import { TouchableOpacity, ActivityIndicator, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

// Configurações fixas - locais
const SCHOOL = {
  id: 'school',
  name: 'ETEC Comendador João Rays',
  coordinate: { latitude: -22.489207558792767, longitude: -48.54638803159028},
  address: 'Rua Ludovico Victório, 2140, Barra Bonita - SP'
};

const BUS_STOPS = [
  {
    id: 'stop_1',
    name: 'Autoescola Muriano',
    address: 'R. Geraldo Fazzio,482',
    coordinate:{ latitude: -22.484264161231977, longitude:-48.56482871771266},
    lines:['Nova Barra'],
  }
];

// Distância de Haversine ( metros)
function getDistance(c1,c2) {


}

function formatDistance(m) {
  return m <1000 ? ' ${Math.round(m)}'m' : ${(m/ 1000)}.toFixed(1)} Km';
}
//HTML do Leaflet (OpenStreepMap - sem chave)
function buildLeafletHTML(userCoord, nearestStopId, selectedStopId) {
const stopsJSON = JSON.stringify (BUS_STOPS);
const schoolJSON = JSON.stringify (SCHOOL);
const userJSON = userCoord ? JSON.stringify (userCoord) : 'null';

 return '';

}

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
