import React from "react";
import { Text, StyleSheet } from "react-native";

const Pizza = () => {
    return (
        <Text>
            <Text style={style.pizza}>Pizza</Text> to bardzo smaczne włoskie danie. Robi się ją z ciasta drożdżowego. 
            Na ciasto wylewa się sos pomidorowy. Na niego układa się składniki : 
            <Text style={style.ingredients}>kiełbasę, ser żółty, oliwki, paprykę</Text>. Jest wiele rodzajów pizzy, 
            może być z mięsem, bez mięsa, rybna,na słodko z <Text style={style.pineapple}>ananasem</Text>.
        </Text>
    )
}


const style = StyleSheet.create({
    ingredients: {
        fontWeight: "bold"
    },
    pizza: {
        fontStyle: "italic"
    },
    pineapple: {
        color: "yellow"
    }
});

export default Pizza;