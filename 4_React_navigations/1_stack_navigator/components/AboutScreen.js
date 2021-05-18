import React from "react";
import {
    View, Text, Button
} from 'react-native';

export default function AboutScreen({ route, navigation }) {
  return (
    <View>
      <Text>AboutScreen</Text>
      <Button
        title={"Fun"}
        onPress={() => {
          navigation.navigate("Fun");
        }}
      ></Button>
    </View>
  );
}
