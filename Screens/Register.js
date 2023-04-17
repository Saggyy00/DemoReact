import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../components/Input';
import Loader from '../Loader/Loader';

const Register = () => {
    const [inputs, setInputs] = useState({
        email: '',
        fullname: '',
        phone: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    const validateFields = () => {
        Keyboard.dismiss;
        let valid = true
        if (!inputs.email || inputs.email.trim() === '') {
            valid = false
            handleError('email', 'Please enter your email ID')
        } else if (validate(inputs.email) === false) {
            valid = false
            handleError('email', 'Not a valid email')
        } else {
            valid = false
            handleError('email', null)
        }
        if (!inputs.fullname || inputs.fullname.trim() === '') {
            valid = false
            handleError('fullname', 'Please enter your fullname')
        } else {
            valid = false
            handleError('fullname', null)
        }

        if (!inputs.phone || inputs.phone.trim() === '') {
            valid = false
            handleError('phone', 'Please enter your phone number')
        } else {
            valid = false
            handleError('phone', null)
        }

        if (!inputs.password) {
            valid = false
            handleError('password', 'Please enter your password')
        } else if (inputs.password.length < 5) {
            valid = false
            handleError('password', 'Password should minimun of 5 characters.')
        } else {
            valid = false
            handleError('password', null)
        }

        if (valid) {
            console.log("Validated");
        }
    }

    const handleOnChange = (input, text) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }))
    }

    const handleError = (input, error) => {
        setErrors((prevState) => ({ ...prevState, [input]: error }))
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <Loader visible={true}></Loader> */}
            <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: 'black', fontSize: 25, fontFamily: 'Inter-SemiBold' }}>Register</Text>
                <Text style={{ color: 'gray', fontSize: 12, fontFamily: 'Inter-Medium', marginVertical: 5 }}>Please enter your details below</Text>
                <View style={styles.fieldContainer}>
                    <Input
                        keyboardType='email-address'
                        placeholder='Enter your email'
                        title='Email'
                        error={errors.email}
                        onHandleChange={(text) => handleOnChange('email', text)}
                        onFocus={() => {
                            handleError('email', null);
                        }}
                    />
                    <Input
                        placeholder='Enter your fullname'
                        title='Fullname'
                        error={errors.fullname}
                        onHandleChange={(text) => handleOnChange('fullname', text)}
                        onFocus={() => {
                            handleError('fullname', null);
                        }}
                    />
                    <Input
                        keyboardType='numeric'
                        placeholder='Enter your phone'
                        title='Phone'
                        error={errors.phone}
                        onHandleChange={(text) => handleOnChange('phone', text)}
                        onFocus={() => {
                            handleError('phone', null);
                        }}
                    />
                    <Input
                        placeholder='Enter your password'
                        title='Password'
                        error={errors.password}
                        password
                        onHandleChange={(text) => handleOnChange('password', text)}
                        onFocus={() => {
                            handleError('password', null);
                        }}
                    />
                    <TouchableOpacity style={styles.buttonRegister} activeOpacity={0.8} onPress={validateFields}>
                        <Text style={{ color: 'white', marginHorizontal: 5 }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    fieldContainer: {
        marginVertical: 20
    },
    buttonRegister: {
        backgroundColor: '#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        marginVertical: 25,
        marginHorizontal: 30
    },
});

export default Register;