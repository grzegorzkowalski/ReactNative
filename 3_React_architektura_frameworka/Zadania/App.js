import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from "./Zadanie1/Name";
import Surname from "./Zadanie1/Surname";
import SquareBox from "./Zadanie2/SquareBox";
import Clock from "./Zadanie3/Clock";
import Map from "./Zadanie4/Map";
import Grid from "./Zadanie5/Grid";

export default function App() {
    return (
        <View style={styles.container}>
            <Name />
            <Surname />
            <Clock/>
            {/*<Map url={"https://bliskopolski.pl/pliki/mapa-polski-1701.png"}/>*/}
            {/*<SquareBox/>*/}
            <Grid/>
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
