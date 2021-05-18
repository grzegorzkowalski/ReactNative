import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@fun_screen", value);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@fun_screen");
    return value ? value : 0;
  } catch (e) {
    // error reading value
    return 0;
  }
};

const FunScreen = ({ route, navigation }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      const count = await getData(); 
      await storeData(String(Number(count) + 1));
      const data = await getData();
      setCounter(data);
    })();
  }, []);

  return (
    <View>
      <Text>FunScreen {counter}</Text>
      <Button
        title={"Contact"}
        onPress={() => {
          navigation.navigate("Contact");
        }}
      ></Button>
    </View>
  );
};

export default FunScreen;
