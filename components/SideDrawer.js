import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SideDrawer = ({ navigation }) => {
    const sideList = [{ icon: 'user', name: 'Profile' }, { icon: 'user', name: 'Messages' }, { icon: 'user', name: 'Activity' }, { icon: 'user', name: 'Lists' }, { icon: 'user', name: 'Reports' }, { icon: 'user', name: 'Statistic' }, { icon: 'user', name: 'SignOut' }, { icon: 'user', name: 'Tell a Friend' }, { icon: 'user', name: 'Help and Feedback' }];
    const [selected, setSelected] = useState('')
    const Header = () => {
        return (
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require('../assets/avatar.png')}></Image>
                <Text style={styles.headerText}> Sagar Sachdeva</Text>
                <View style={styles.follower}>
                    <Text style={{ fontSize: 10, fontFamily: 'Inter-Regular' }}> 265 Followers</Text>
                    <Image style={{ height: 15, width: 15, marginLeft: 5 }} source={require('../assets/home.png')}></Image>
                </View>
                <View style={styles.sepratorStyle} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={sideList}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={1} onPress={() => {setSelected(item.name), navigation.closeDrawer(), navigation.navigate('Search')}}>
                        <View style={{ height: index === 7 ? 0.5 : 0, backgroundColor: '#D3D3D3', marginHorizontal: 25, marginTop: index === 7 ? 60 : 0 }} />
                        <View style={[styles.list, { backgroundColor: selected === item.name ? '#E5D2EC' : 'transparent', marginTop: index === 7 ? 30 : 0 }]}>
                            <Image style={[styles.image, { tintColor: selected === item.name ? '#A81CE2' : 'gray' }]} source={require('../assets/home.png')}></Image>
                            <Text style={[styles.text, { color: selected === item.name ? '#A81CE2' : 'black' }]}> {item.name} </Text>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.name}
                ListHeaderComponent={Header}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 }, // change this for more shadow
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,
        backgroundColor: "white"
    },
    list: {
        height: 45,
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    image: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    text: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'Inter-Medium',
    },
    header: {
        padding: 10,
    },
    headerImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Inter-Bold',
        color: 'gray',
        marginTop: 15
    },
    follower: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    sepratorStyle: {
        height: 0.5,
        marginTop: 30,
        backgroundColor: '#D3D3D3'
    }
})

export default SideDrawer;