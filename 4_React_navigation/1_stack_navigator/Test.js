import React from 'react';
import {View, Text, Button} from "react-native";

const Test = ({route, navigation}) => {
    return (
        <View>
            <Text>Test 1</Text>
            <Button
                title="About Us"
                onPress={() => navigation.navigate("AboutUsScreen")}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate("HomeScreen")}
            />
            <Button
                title="Powrot"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default Test;