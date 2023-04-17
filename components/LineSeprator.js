import React from "react";
import { View, StyleSheet } from "react-native";

const LineSeprator = () => {

    return (
        <View style={styles.sepratorStyle} />
    )
}

const styles = StyleSheet.create({
    sepratorStyle: {
        height: 0.5,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#D3D3D3'
    }
});

export default LineSeprator;