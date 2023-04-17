import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from "react";

const InputDetail = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(true);

    const validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    const validateFields = () => {
        if (email === "") {
            Alert.alert('Email is required.');
        } else if (validate(email) === false) {
            Alert.alert('Email is invalid.');
        } else if (password === "") {
            Alert.alert('Password is required.');
        } else if (password.length <= 6) {
            Alert.alert("Password should contain minimum 6 character.")
        } else {
            navigation.navigate('Custom Nav')
        }
    }
    return (
        <View>
            <TextInput
                style={styles.emailStyle}
                placeholder='Email'
                autoCapitalize={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text.trim())}
            />
            <TextInput
                style={styles.passwordStyle}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text.trim())}
            />
            <TouchableOpacity style={styles.loginButton} onPress={validateFields}>
                <Text style={styles.loginTextStyle}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createAccountButton}>
                <Text style={styles.createAccountTextStyle}> Create an account </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    createAccountButton: {
        height: 40,
        marginTop: 0,
        marginLeft: 100,
        marginRight: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    createAccountTextStyle: {
        color: 'gray',
        fontSize: 13,
        fontWeight: "normal"
    }
});

export default InputDetail;