import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const MusicPlayer = () => {
    return (
        <SafeAreaView >
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.back}>
                    <Image source={require('../assets/more.png')} />
                </TouchableOpacity>
                <Text>Now Playing</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/background.png')} style={styles.image} />
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ alignSelf: 'center', fontWeight: '400', fontSize: 25, marginHorizontal: 10 }}>Corner of My Sky</Text>
                <Text style={{ alignSelf: 'center', color: 'gray' }}>Kelly Lio Owns Inner Songs</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                    <Image source={require('../assets/more.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
    },
    back: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        flex: 0.5,
        marginLeft: 10
    },
    imageContainer: {
        borderColor: 'gray',
        borderRadius: 250 / 2,
        borderWidth: 0.3,
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30
    },
    image: {
        width: 230,
        height: 230,
        borderRadius: 230 / 2
    }
})


export default MusicPlayer;