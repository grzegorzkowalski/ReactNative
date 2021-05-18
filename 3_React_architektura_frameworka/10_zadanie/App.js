import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState(Math.round(Math.random() * 10));

  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      <StatusBar style="auto" />
      <Button
        title={"Klick"}
        onPress={() => {
          setNumber(Math.round(Math.random() * 10));
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
