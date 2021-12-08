import React from "react";
import { Text } from "react-native";

const Invitation = ({data}) => {
    return (
        <Text>
            { 
                `Zapraszam w ${data.day} ${data.hour} do ${data.place}. 
                Obowiązuje strój ${data.dressCode}.` 
            }
        </Text>
    )
}

export default Invitation;