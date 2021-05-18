import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import AboutUsScreen from "./AboutUsScreen";
import Test from "./Test";
import ContactScreen from "./ContactScreen";
import Logo from "./Logo";
let Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name={"HomeScreen"}
            component={HomeScreen}
            options={{
              title: "NadpisujemyHome",
              headerTintColor: "red",
              headerStyle: {
                backgroundColor: "#21094e"
              },
              headerRight: () => <Logo/>
            }}
        />
        <Stack.Screen name={"AboutUsScreen"} component={AboutUsScreen}/>
        <Stack.Screen name={"Test"} component={Test}/>
        <Stack.Screen name={"ContactScreen"} component={ContactScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginBottom: 10
  }
});
