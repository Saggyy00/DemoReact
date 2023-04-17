import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Menu from '../assets/menu.svg';
import EventCard from '../components/EventCard';
import AddPost from '../components/AddPost';
import About from '../components/About';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const OragnizationDetail = () => {

    const [selection, setSelection] = useState(1)

    function f1() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('f1 resolved')
            }, 2000);
        })
    }
    function f2() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('f2 resolved')
            }, 300);
        })
    }
    function f3() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('f3 resolved')
            }, 500);
        })
    }

    async function msg() {
        const a = f1()
        const b = f2()
        const c = f3()
        console.log(`${a} ${b} ${c}`);
    }

    useEffect(() => {
        msg()
        // let promise = new Promise((resolve, reject) => {
        //     condition
        //     if (condition) {
        //         resolve()
        //     } else {
        //         reject()
        //     }
        // })

        // promise.then((result) => { console.log(result); }).catch((error) => { console.log(error); })
    }, [])

    const Header = () => {
        return (
            <SkeletonPlaceholder enabled={false}>
                <View>
                    <View >
                        <Image style={styles.banner} source={require('../assets/background.png')} />
                        <Text style={{ marginHorizontal: 20, marginTop: 15, fontSize: 20, color: '#212121', fontFamily: 'Inter-SemiBold' }}>Oragnization</Text>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image style={{ width: 15, height: 15, marginLeft: 20, marginTop: 5, resizeMode: 'contain' }} source={require('../assets/location.png')} />
                            <Text style={styles.textStyle}>Sahibzada Ajeet Singh Nagar (Mohali) · Railway Station - Balongi Rd, Industrial Area, Industrial Area Mohali Phase 9, Sahibzada Ajit Singh Nagar, Punjab</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Image style={{ width: 15, height: 15, marginLeft: 20, resizeMode: 'contain' }} source={require('../assets/user.png')} />
                            <Text style={styles.textStyle}>Is the admin</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                            <Image style={{ width: 15, height: 15, marginLeft: 20, resizeMode: 'contain' }} source={require('../assets/link.png')} />
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Text style={{ marginLeft: 10, marginRight: 20, fontSize: 14, fontFamily: 'Inter-Regular', color: '#02526B' }}>www.google.com</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Image style={{ width: 15, height: 15, marginLeft: 20, resizeMode: 'contain' }} source={require('../assets/members.png')} />
                            <Text style={{ marginHorizontal: 10, fontSize: 14, fontFamily: 'Inter-SemiBold', color: '#212121' }}>2K members</Text>
                            <Image style={{ width: 22, height: 22, borderRadius: 22 / 2, zIndex: 3 }} source={require('../assets/avatar.png')} />
                            <Image style={{ width: 22, height: 22, borderRadius: 22 / 2, marginLeft: -5, zIndex: 2 }} source={require('../assets/avatar.png')} />
                            <Image style={{ width: 22, height: 22, borderRadius: 22 / 2, marginLeft: -5, zIndex: 1 }} source={require('../assets/avatar.png')} />
                            <Text style={{ marginLeft: 5, marginRight: 20, fontSize: 14, fontFamily: 'Inter-Medium', color: '#A61521', flex: 1 }}>Is in this org.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                            <Text style={{ marginLeft: 20, fontSize: 16, fontFamily: 'Inter-SemiBold', color: '#B20312' }}>You are a member</Text>
                            <TouchableOpacity style={{ marginLeft: 8 }}>
                                <Text style={{ fontSize: 16, color: '#02526B', fontFamily: 'Inter-Medium' }}>Edit Status</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}></View>
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Image style={{ width: 40, height: 40 }} source={require('../assets/return.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'column', marginTop: 10 }}>
                            <View style={{ height: 1, backgroundColor: '#EBEBEB' }}></View>
                            <View style={{ flexDirection: 'row', height: 50 }}>

                                <TouchableOpacity
                                    style={[styles.buttonStyle, { borderBottomWidth: selection === 1 ? 2 : 0, borderBottomColor: selection === 1 ? '#B20312' : 'transparent' }]}
                                    onPress={() => setSelection(1)}
                                >
                                    <Text style={{ fontSize: 15, fontFamily: 'Inter-Medium', color: '#B20312', justifyContent: 'center' }}>Events</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.buttonStyle, { borderBottomWidth: selection === 2 ? 2 : 0, borderBottomColor: selection === 2 ? '#B20312' : 'transparent' }]}
                                    onPress={() => setSelection(2)}
                                >
                                    <Text style={{ fontSize: 15, fontFamily: 'Inter-Medium', color: '#B20312', justifyContent: 'center' }}>Posts</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.buttonStyle, { borderBottomWidth: selection === 3 ? 2 : 0, borderBottomColor: selection === 3 ? '#B20312' : 'transparent' }]}
                                    onPress={() => setSelection(3)}
                                >
                                    <Text style={{ fontSize: 15, fontFamily: 'Inter-Medium', color: '#B20312', justifyContent: 'center' }}>About</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ height: 1, backgroundColor: '#EBEBEB' }}></View>
                        </View>

                    </View>
                </View>
            </SkeletonPlaceholder>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.leftButtonStyle}>
                    <Image source={require('../assets/back_white.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButtonStyle}>
                    <Menu width={40} height={40} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                bounces={false}
                data={selection === 3 ? [1] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={(item) => {
                    if (selection === 1) {
                        return (<EventCard />)
                    } else if (selection === 2) {
                        return (<AddPost intialIndex={item.index} />)
                    } else {
                        return (<About />)
                    }
                }}
                ListHeaderComponent={() => (<Header />)}
            //  keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        backgroundColor: '#00495E',
        height: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftButtonStyle: {
        width: 45,
        height: 45,
        marginLeft: 10,
        justifyContent: 'center'
    },
    rightButtonStyle: {
        width: 45,
        height: 45,
        marginRight: 10,
        justifyContent: 'center'
    },
    banner: {
        width: '100%',
        height: 150
    },
    textStyle: {
        marginLeft: 10,
        marginRight: 20,
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        flex: 1,
        color: '#212121'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default OragnizationDetail;