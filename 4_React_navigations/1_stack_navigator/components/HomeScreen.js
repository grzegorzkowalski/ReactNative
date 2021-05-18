import React, { useEffect } from 'react';
import {
    View, Text, Button
} from 'react-native';

const HomeScreen = ({route, navigation}) => {

    useEffect(() => {
        navigation.addListener('focus' , function(){
            console.warn("Focus na Home")
        });
    }, [navigation]);

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
            <Button title={"About"} onPress={
                () => {
                    navigation.navigate('About')
                }
            }>
            </Button>
        </View>
    )
}

export default HomeScreen;