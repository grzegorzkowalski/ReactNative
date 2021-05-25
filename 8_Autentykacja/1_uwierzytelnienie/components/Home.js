import React from 'react'
import {
    Pressable,
    View,
    Text,
    StyleSheet
} from 'react-native';


const  Home = ({navigation}) => {
    return (
        <View>
            <Pressable onPress={() => {
                navigation.navigate("Logowanie") 
            }}>
                <Text style={styles.button}>Logowanie</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate("Rejestracja") 
            }}>
                <Text style={styles.button}>Rejestracja</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        flex: 1,
        margin: 'auto',
        backgroundColor: 'red',
        padding: 10,
        textAlign: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 30
    }
})

export default Home;