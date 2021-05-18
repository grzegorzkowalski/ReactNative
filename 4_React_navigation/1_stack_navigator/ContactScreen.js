import React from 'react';
import {View, Text, Button} from "react-native";

const ContactScreen = ({route, navigation}) => {
    return (
        <View>
            <Text>Contact</Text>
            <Button
                title="About"
                onPress={() => navigation.navigate("AboutUsScreen")}
            />
            <Button
                title="Powrot"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default ContactScreen;