import 'expo-dev-client';
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.title}>hello</Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.title}>world</Text>
      </View>
      <View style={styles.content3}>
        <Text style={styles.title3}>this is my first app</Text>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5e5f5'
  },
  content1: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "flex-start"
  },
  content2: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
  },
  content3: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "flex-end"
  },
  title: {
    color: "blue",
    fontSize: 48
  },
  title3: {
    width: "33%",
    fontSize: 48
  }
})