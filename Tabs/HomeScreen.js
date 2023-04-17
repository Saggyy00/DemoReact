import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../assets/menu.svg';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View >
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{ marginLeft: 15 }}
                        onPress={() => {
                            navigation.openDrawer();
                        }}>
                        <Menu width={40} height={40} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', alignSelf: 'center', paddingLeft: 20}}> Home </Text>
                </View>

                <TouchableOpacity 
                style={styles.rightButtonStyle} 
                onPress={() => {navigation.navigate('Login')}}>
                    <Text style={{ color: 'white'}}> Next </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    rightButtonStyle: {
        width: 200,
        height: 45,
        borderRadius: 20,
        backgroundColor: 'green',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 250
    }
});

export default HomeScreen;