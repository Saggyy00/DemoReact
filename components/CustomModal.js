import React from "react"
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { removeItemValue } from "./AsynStorageManager";

const CustomModal = ({ isShowing, index, changeValue }) => {

    const handleOkay = () => {
        removeItemValue(index, () => {
            changeValue(!isShowing);
        })
    };
    const handleDecline = () => changeValue(!isShowing);

    return (
        <View>
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={isShowing}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.modal}>
                        <Text style={styles.textHeader}>Delete Items!</Text>
                        <Text style={styles.textBody}>Are you sure you want to delete this item?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.rightButton} onPress={() => { handleDecline() }}>
                                <Text style={{ color: '#ffffff' }}> Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.leftButton} onPress={() => { handleOkay() }}>
                                <Text style={{ color: '#ffffff' }}> Okay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        alignSelf: 'center',
        backgroundColor: "#ffffff",
        width: '80%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    textHeader: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
    },
    textBody: {
        alignSelf: 'center',
        color: 'gray',
        fontSize: 15,
        marginTop: 10,
    },
    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 10,
        width: 100,
        height: 50
    },
    rightButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray",
        opacity: 0.7,
        borderRadius: 10,
        width: 100,
        height: 50
    }
});
export default CustomModal;