import React from "react";
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const LogInTemplate = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.containerBG} source={require('../assets/background_dot.png')}>
                <View style={styles.statusBar}></View>
                <View style={styles.topBar}>
                    <TouchableOpacity style={styles.backButtonStyle} onPress={() => navigation.goBack()}>
                        <Text>Left</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                style={{ alignSelf: 'center', backgroundColor: 'gray', height: 50, width: 250, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}
                onPress={() => {navigation.navigate('CameraPermission')}}
            >
                <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: getStatusBarHeight(),
    },
    topBar: {
        height: 50,
    },
    containerBG: {
        width: '100%',
        height: '100%'
    },
    backButtonStyle: {
        width: 45,
        height: 45,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
});

export default LogInTemplate;