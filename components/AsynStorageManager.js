import React from "react";
import { AsyncStorage } from 'react-native';

export const saveData = async (input, callBack) => {
    try {
        await AsyncStorage.setItem("@user_input", input)
        callBack();
        alert('Data successfully saved')
    } catch (e) {
        alert('Failed to save the data to the storage')
    }
}

export const getData = async (callBack) => {
    try {
        const value = await AsyncStorage.getItem("@user_input");
        console.log(value);
        if (value !== null) {
            callBack(value);
        }
    } catch (e) {
        alert('Failed to fetch the input from storage');
    }
}

export const saveArray = async (items) => {
    try {
        await AsyncStorage.setItem('@save_array', JSON.stringify(items));
        alert('Data saved')
    } catch (error) {
        alert('Failed to save the input');
    }
}
export const getArray = async (callBack) => {
    try {
        const myArray = await AsyncStorage.getItem('@save_array');
        if (myArray !== null) {
            callBack(myArray);
        }
    } catch (error) {
        alert('Failed to fetch the input');
    }
}
export const removeItemValue = async (index, callback) => {
    const rawValue = await AsyncStorage.getItem('@save_array');
    try {
        const jsonValue = JSON.parse(rawValue) || [];
        const finalValue = [...jsonValue.slice(0, index), ...jsonValue.slice(index + 1)];
        console.log("JsonvLaue",finalValue)
        await AsyncStorage.setItem('@save_array', JSON.stringify(finalValue));
        callback()
    } catch (e) {
        console.log('Parsing failed', e)
        alert('Failed to remove item');
    }
}
export const removeAppKeys = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
        console.log(`Keys: ${keys}`) // Just to see what's going on
        await AsyncStorage.multiRemove(keys)
    } catch (e) {
        console.log(e)
    }
    console.log('Done')
}