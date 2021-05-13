import React from 'react';
import {Text} from "react-native";

const Clock = () => {
    const time = new Date().toLocaleTimeString();
    return <Text>{time}</Text>
};

export default Clock;