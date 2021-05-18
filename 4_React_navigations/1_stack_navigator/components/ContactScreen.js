import React from "react";
import {
    View, Text, Button
} from 'react-native';

const ContactScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>ContactScreen</Text>
      <Button
        title={"Home"}
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
};

export default ContactScreen;
