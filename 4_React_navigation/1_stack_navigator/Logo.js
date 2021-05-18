import React from 'react';
import {View, Image} from "react-native";

const Logo = () => {
    const imgUrl = "https://lh3.googleusercontent.com/proxy/R4Ls1WtjYPXmrBFxKot40F8ZZKUozCQKxgZQkN1vWc1U3suep3MDjHW-qr3SG0_yeXKCbQgNgzes5qhIpRmFr7E2hXB8n7l6Cp3yP_2WQC3eESJ15A";
    return (
        <View>
            <Image
                source={imgUrl}
                style={{width: 50, height: 50}}
            />
        </View>
    );
};

export default Logo;