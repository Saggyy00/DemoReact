import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react' 

const Input = ({ title, password, error, onFocus = () => { }, onHandleChange = (text) => {}, ...props}) => {

    const [focus, setFocus] = useState(false)
    const [hidden, setHidden] = useState(true)

    return (
        <View>
            <Text style={{ fontSize: 13, color: '#808080', fontFamily: 'Inter-Medium', marginTop: 5 }}>{title}</Text>
            <View style={[styles.fieldView, {borderColor: error ? '#cc0000' : focus ? '#6495ED' : 'transparent'}]}>
                <TextInput 
                style={{ padding: 5, flex: 1 }} 
                keyboardType={props.keyboardType}
                placeholder={props.placeholder} 
                autoCorrect={false} 
                secureTextEntry={password && hidden}
                onChangeText={(text) => {
                    onHandleChange(text);
                }}
                onFocus={() => {
                    onFocus();
                    setFocus(true)
                }}
                onBlur={() => {
                    setFocus(false)
                }}
                />
                {password &&
                    <TouchableOpacity style={styles.isHidden} activeOpacity={1} onPress={() => setHidden(!hidden)}>
                        <Text style={{ color: 'white', marginHorizontal: 5 }}> {hidden ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                }
            </View>
            {error && 
                <Text style={{fontSize: 12, color: '#cc0000', fontFamily: 'Inter-Medium'}}>{error}</Text>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    fieldView: {
        flexDirection: 'row',
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        marginVertical: 5,
        padding: 5,
        borderWidth: 0.8
    },
    isHidden: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        backgroundColor: '#6495ED',
        borderRadius: 5,
    }
});

export default Input;