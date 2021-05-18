import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import FunScreen from "./components/FunScreen";
import ContactScreen from "./components/ContactScreen";

const Stack = createStackNavigator();

export default function App() {

  const { width, height } = Dimensions.get('window')

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      >
        <Stack.Screen 
        options={{
          headerRight: () => {
            return <Image style={{width: (width / 10), height: (width / 10)}} source={require('./assets/home.png')} />
          }
        }}
        component={HomeScreen} name={"Home"}></Stack.Screen>
        <Stack.Screen component={AboutScreen} name={"About"}></Stack.Screen>
        <Stack.Screen component={FunScreen} name={"Fun"}></Stack.Screen>
        <Stack.Screen component={ContactScreen} name={"Contact"}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
