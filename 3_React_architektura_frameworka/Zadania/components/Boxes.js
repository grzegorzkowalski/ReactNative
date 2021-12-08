import React from "react";
import { View, StyleSheet } from "react-native";

const Boxes = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    box : {
        width: 150,
        height: 150,
        backgroundColor: "blue",
        marginTop: 150
    }
})

export default Boxes;