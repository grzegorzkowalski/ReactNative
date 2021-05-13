import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from "./Zadanie1/Name";
import Surname from "./Zadanie1/Surname";
import SquareBox from "./Zadanie2/SquareBox";

export default function App() {
  return (
    <View style={styles.container}>
      <Name />
      <Surname />
      <SquareBox/>
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
