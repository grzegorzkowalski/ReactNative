import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{...styles.view, backgroundColor: "red" }}></View>
      <View style={{...styles.view, backgroundColor: 'blue' }}></View>
      <View style={{...styles.view, backgroundColor: 'pink' }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { width: 100, height: 100, backgroundColor: "red" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
