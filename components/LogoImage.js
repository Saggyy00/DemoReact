import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";


const LogoImage = () => {

    // useEffect(() => {
    //     console.log("IMAGE URL", props.image);
    // }, []);
   
    return (
        <Image style={styles.logoImage} source={require('../assets/logoExample.png')} />
    )
};

const styles = StyleSheet.create({
    logoImage: {
        width: 200,
        height: 200
    }
});

export default LogoImage;