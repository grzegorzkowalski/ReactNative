import React from 'react';
import {Button, Text, View} from "react-native";

const AboutUsScreen = ({route, navigation}) => {
    return (
        <View>
            <Text>AboutUsScreen</Text>
            <Button
                title="Test"
                onPress={() => navigation.navigate("Test")}
            />
            <Button
                title="Home Screen"
                onPress={() => navigation.navigate("HomeScreen")}
            />
            <Button
                title="Powrot"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default AboutUsScreen;