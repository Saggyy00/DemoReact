import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Button, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { saveData, getData, saveArray, removeAppKeys, getArray, removeItemValue } from './AsynStorageManager'
import DeviceInfo from 'react-native-device-info'
import CustomModal from "./CustomModal";

const UserInput = () => {

    const [input, setInput] = useState('');
    const [retrived, setRetrived] = useState('');
    const [myItems, setMyItems] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(0);

    console.log('visible', visible)
    const toggle = (indexValue) => {
        setVisible(!visible);
        setSelected(indexValue);
        // Alert.alert(
        //     "Delete Items!",
        //     "Are you sure you want to delete this item?",
        //     [
        //         {
        //             text: "OK",
        //             onPress: () => removeItemValue(index, () => {
        //                 getArray((items) => {
        //                     let parsed = JSON.parse(items)
        //                     setMyItems(parsed)
        //                 })
        //             }),
        //             style: "ok",
        //         },
        //         {
        //             text: "Cancel",
        //             onPress: () => console.log("--> cancel"),
        //             style: "cancel",
        //         },
        //     ],
        // );
    };

    onSubmitEdit = () => {
        if (input !== "") {
            myItems.push({ id: Math.random(), name: input.charAt(0).toUpperCase() + input.slice(1) })
            saveArray(myItems)
            setInput('')
        }
        // saveData(input, () => {
        //     setRetrived(input)
        //     setInput('')
        // })

        //removeAppKeys()
        // Toast.showWithGravity("Demo React", Toast.LONG, Toast.BOTTOM);

    };

    useEffect(() => {
        //removeAppKeys()
        // getData((temp) => {
        //     setRetrived(temp)
        // })
        getArray((items) => {
            let parsed = JSON.parse(items)
            setMyItems(parsed)
            console.log(parsed)
        })
    }, [!visible]);


    return (
        <View style={{ flex: 1, backgroundColor: visible ? "gray" : "#ffffff" }}>
            <View style={styles.statusBar}></View>
            <View>
                <TextInput
                    style={styles.searchStyle}
                    placeholder='Asyn Storage'
                    autoCapitalize={false}
                    value={input}
                    onChangeText={(t) => setInput(t)}
                    onSubmitEditing={onSubmitEdit}
                />
                {/* <Text style={styles.textStyle}>{'Saved value is ' + retrived}</Text> */}
                <Text style={styles.textStyle}>{input}</Text>
                <View>
                    <FlatList
                        data={myItems}
                        renderItem={({ item, index }) =>
                            <View>
                                <TouchableOpacity
                                    onLongPress={() => toggle(index)}
                                    onPress={() => toggle(index)}
                                    activeOpacity={0.6}>
                                    <Text style={{ fontSize: 20, alignSelf: 'center', padding: 5, flex: 1 }}> {item.name} </Text>
                                </TouchableOpacity>
                            </View>
                        }
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
            <CustomModal isShowing={visible} index={selected} changeValue={(value) => {
                setVisible(value)
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: getStatusBarHeight()
    },
    searchStyle: {
        height: 50,
        margin: 15,
        padding: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        borderRadius: 10
    },
    textStyle: {
        margin: 15,
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default UserInput;