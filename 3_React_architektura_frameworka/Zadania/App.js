import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from "./Name";
import Surname from "./Surname";

export default function App() {
  return (
    <View style={styles.container}>
      <Name />
      <Surname />
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
