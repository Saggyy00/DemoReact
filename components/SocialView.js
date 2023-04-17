import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const SocialView = () => {
    return (
        <View style={{marginTop: 30}}>
            <TouchableOpacity style={styles.fieldsContainer}>
                <Image style={styles.imageStyle} source={require('../assets/logoExample.png')}></Image>
                <Text style={styles.fbText}> Continue with facebook </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fieldsContainer}>
                <Image style={styles.imageStyle} source={require('../assets/logoExample.png')}></Image>
                <Text style={styles.twitterText}> Create an account </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fieldsContainer}>
                <Image style={styles.imageStyle} source={require('../assets/logoExample.png')}></Image>
                <Text style={styles.fbText}> Create an account </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fieldsContainer}>
                <Image style={styles.imageStyle} source={require('../assets/logoExample.png')}></Image>
                <Text style={styles.discordText}> Create an account </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    fieldsContainer: {
        height: 50,
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 12,
        backgroundColor: '#E1E5EB',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        width: 25,
        height: 25
    },
    fbText: {
        color: "#3b5998",
        fontSize: 15,
        fontWeight: "500"
    },
    twitterText: {
        color: "#00acee",
        fontSize: 15,
        fontWeight: "500"
    },
    discordText: {
        color: "#7289da",
        fontSize: 15,
        fontWeight: "500"
    }
});

export default SocialView;