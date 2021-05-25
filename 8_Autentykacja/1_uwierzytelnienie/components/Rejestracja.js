import React, {useState} from 'react'
import {
    View,
    TextInput,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { db , auth} from '../config'




const  Rejestracja = () => {
    const [responseMessage, setResponseMessage] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            console.log(user)

            

            const u = user.user.uid;

            setResponseMessage("Zarejestrowano użytkownika o uid " + u)

            db.collection('users').doc(u).set({
                email: user.user.email,
                wiek: 36,
                photo: 'https://s3.viva.pl/newsy/bruce-lee-571349-GALLERY_BIG.jpg'

            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })


        })
        .catch((error) => {
            setResponseMessage(error.message)
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail}>
            
            </TextInput>
            <Text>Password</Text>
            <TextInput style={styles.input} value={pass} onChangeText={setPass}>
            
            </TextInput>
            <Button onPress={() => {
                handleRegister();
            }} title={"Zarejestruj się"}></Button>
            <Text>{responseMessage}</Text>
        </View>
    )
}

export default Rejestracja;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        border: '1px solid black',
        padding: 20
    },
    container: {
        padding: 30
    }
})