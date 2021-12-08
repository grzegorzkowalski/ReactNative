import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.blueContainer}></View>
            <View style={styles.redContainer}>
                <View style={styles.yellowContainer}></View>
                <View style={styles.yellowContainer}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%", 
        width: "100%", 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink"
    },
    blueContainer: {
        marginTop: 50,
        marginBottom: 50,
        width: "90%",
        backgroundColor: "blue",
        marginBottom: 10,
        flex: 1,
    }, 
    redContainer: {
        marginTop: 50,
        marginBottom: 50,
        width: "90%",
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    yellowContainer: {
        height: 100,
        width: "40%",
        backgroundColor: "yellow"
    }
});

export default Layout;