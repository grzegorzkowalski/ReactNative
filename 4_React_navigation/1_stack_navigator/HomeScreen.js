import React from 'react';
import {Text, View, Button, StyleSheet} from "react-native";

const HomeScreen = ({route, navigation}) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="About Us"
                onPress={() => navigation.navigate("AboutUsScreen")}
                style={styles.btn}
            />
            <Button
                title="Test"
                onPress={() => navigation.navigate("Test")}
            />
            <Button
                title="Contact"
                onPress={() => navigation.navigate("ContactScreen")}
            />
            <Button
                title="Powrot"
                onPress={() => navigation.goBack()}
            />
        </View>
);
};

const styles = StyleSheet.create({
    btn: {
        margin: 10,
        alignItems: "space-between"
    }
});

export default HomeScreen;