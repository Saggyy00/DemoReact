import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import OragnizationDetail from '../Screens/OragnizationDetail';
import Register from '../Screens/Register';
import Map from '../Screens/Map';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            {/* <TouchableOpacity 
            style={styles.rightButtonStyle}
            onPress={() => {navigation.navigate('Custom Nav')}}
            >
                <Text style={{ color: 'white' }}> Next </Text>
            </TouchableOpacity> */}
            {/* <SkeletonPlaceholder borderRadius={4}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <Image style={{ width: 120, height: 20 }} src={require('../assets/back.png')} />
                        <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18 }}>Hello world</Text>
                    </View>
                </View>
            </SkeletonPlaceholder> */}
            {/* <OragnizationDetail></OragnizationDetail> */}
            {/* <Register></Register> */}
            <Map></Map>
        </View>
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

export default SearchScreen;