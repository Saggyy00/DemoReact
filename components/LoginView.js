import React from "react";
import { ScrollView, View, StyleSheet} from "react-native";
import LineSeprator from "./LineSeprator";
import SocialView from "./SocialView";
import LogoImage from "./LogoImage";
import InputDetail from "./InputDetail";

const LoginView = ({ navigation }) =>  {
    return (
        <ScrollView>
            <View>
                <View style={styles.imageContainer}>
                    <LogoImage />
                </View>
                <View style={styles.fieldsContainer}>
                    <InputDetail navigation={navigation}/>
                    <LineSeprator />
                    <SocialView />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop: "10%"
    },
    logoImage: {
        width: 200,
        height: 200
    },
    fieldsContainer: {
        height: 200,
        flexDirection: 'column'
    },
    emailStyle: {
        height: 50,
        margin: 15,
        padding: 10,
        backgroundColor: '#E1E5EB',
        borderRadius: 10
    },
    passwordStyle: {
        height: 50,
        margin: 15,
        padding: 10,
        backgroundColor: '#E1E5EB',
        borderRadius: 10
    },
    loginTextStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold"
    },
    loginButton: {
        height: 45,
        margin: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00A1DB",
        shadowColor: 'rgba(0,161,219, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 10,
        elevation: 2
    },
    createAccountTextStyle: {
        color: 'gray',
        fontSize: 13,
        fontWeight: "normal"
    },
    createAccountButton: {
        height: 40,
        marginTop: 0,
        marginLeft: 100,
        marginRight: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default LoginView;