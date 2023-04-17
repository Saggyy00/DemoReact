import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FlatListView from "./FlatListView";
import firebase from "@react-native-firebase/app";
import analytics from '@react-native-firebase/analytics';

const CustomNav = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.statusBar} />
            <View style={styles.topBarStyle}>
                <TouchableOpacity style={styles.leftButtonStyle} onPress={() => navigation.goBack()}>
                    <Text>Left</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.coinTextStyle}> Show me the coin </Text>
                    <Text style={styles.dateTextStyle}> 01/12/2022 10:12:30 PM</Text>
                </View>
                <TouchableOpacity style={styles.rightButtonStyle} onPress={
                    async () => await analytics().logEvent('add_to_cart', {
                        id: 101,
                        item: 'Google_pay',
                        description: ['Amount_Deducted', 'Genration_ticket'],
                    })
                }>
                    <Text> Right </Text>
                </TouchableOpacity>
            </View>
            <FlatListView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: getStatusBarHeight(),
        backgroundColor: 'pink'
    },
    topBarStyle: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'pink',
    },
    leftButtonStyle: {
        width: 45,
        height: 45,
        marginLeft: 10,
        justifyContent: 'center'
    },
    rightButtonStyle: {
        width: 45,
        height: 45,
        marginRight: 10,
        justifyContent: 'center'
    },
    coinTextStyle: {
        fontSize: 17,
        textAlign: 'center'
    },
    dateTextStyle: {
        fontSize: 10,
        paddingTop: 5,
        textAlign: 'center'
    },
    listContainer: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3'
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    tagText: {
        fontSize: 20
    },
    innerView: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 8,
        paddingRight: 8
    }
});

export default CustomNav;