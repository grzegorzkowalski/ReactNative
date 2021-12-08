import React from "react";
import { View, Text } from "react-native";

const Calendar = () => {
    let time = new Date();
    return (
        <View>
            <Text>{ time.toLocaleDateString() } { time.toLocaleTimeString() }</Text>
        </View>
    )
}

export default Calendar;