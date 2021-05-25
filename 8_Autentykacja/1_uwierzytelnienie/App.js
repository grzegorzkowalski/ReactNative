import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Home from './components/Home';
import Logowanie from './components/Logowanie';
import Profil from './components/Profil';
import Rejestracja from './components/Rejestracja';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


// //Firebase config
// var firebaseConfig = {
//   apiKey: "AIzaSyBl2mbAxVASoQ7jJdx9kcCRM-GM2avRmqE",
//   authDomain: "coderlslab.firebaseapp.com",
//   databaseURL: "https://coderlslab.firebaseio.com",
//   projectId: "coderlslab",
//   storageBucket: "coderlslab.appspot.com",
//   messagingSenderId: "490304552202",
//   appId: "1:490304552202:web:b6ad68334b53ce161fcef3",
// };
// // Zainicjuj Firebase
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Logowanie'} component={Logowanie} />
        <Stack.Screen name={'Rejestracja'} component={Rejestracja} />
        <Stack.Screen name={'Profil'} component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({});
