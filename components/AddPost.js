import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AddPost = (props) => {

    return (
        <View>
            {(props.intialIndex === 0 ?
                <View>
                    <Text style={styles.textStyle}>Add a post</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.searchStyle} >
                            <TextInput
                                placeholder='Type here'
                                style={styles.textInput}
                            ></TextInput>
                            <TouchableOpacity>
                                <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/more.png')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#B20312', borderRadius: 8, marginLeft: 12, marginRight: 20, justifyContent: 'center', alignItems: 'center', width: 65, height: 35 }}>
                            <Text style={{ fontSize: 12, color: '#FAFAFA', fontFamily: 'Inter-Medium' }}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View>
                    <View style={{ height: 1.5, backgroundColor: '#EBEBEB', marginHorizontal: 20, marginTop: 10 }}></View>
                    <View style={{ marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 30, height: 30, marginLeft: 20, borderRadius: 30 / 2, marginTop: 10 }} source={require('../assets/avatar.png')} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 14, color: '#212121', fontFamily: 'Inter-SemiBold', marginHorizontal: 12, marginTop: 8 }}>Justine Cunningham, PA - C</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 12, color: '#B20312', fontFamily: 'Inter-Medium', marginLeft: 12 }}>Physician Assistant</Text>
                                    <Text style={{ fontSize: 12, color: '#A3A3A3', fontFamily: 'Inter-SemiBold', marginLeft: 4, marginRight: 12 }}>. 2h</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', marginLeft: 15, marginRight: 20 }}>
                                <Image style={{ width: 20, height: 20, tintColor: 'black' }} source={require('../assets/more.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 14, color: '#212121', fontFamily: 'Inter-Medium', marginHorizontal: 20, marginTop: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

                        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 12, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#F7F7F7', borderRadius: 30 / 2, height: 30 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require('../assets/like.png')} />
                                    <Text style={{ fontSize: 12, color: '#EA1D2F', fontFamily: 'Inter-Medium', marginHorizontal: 5 }}>2</Text>
                                </TouchableOpacity>
                                <View style={{ height: 20, backgroundColor: '#EBEBEB', width: 1.5, alignSelf: 'center' }}></View>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, }}>
                                    <Image style={{ width: 20, height: 20 }} source={require('../assets/chat.png')} />
                                    <Text style={{ fontSize: 12, color: '#252525', fontFamily: 'Inter-Medium', marginHorizontal: 5 }}>2</Text>
                                </TouchableOpacity>
                                <View>
                                </View>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../assets/share.png')} />
                                <Text style={{ fontSize: 12, color: '#252525', fontFamily: 'Inter-Medium', marginHorizontal: 5 }}>2</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', backgroundColor: '#F7F7F7', height: 40, marginHorizontal: 20, marginVertical: 12 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, flex: 1 }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../assets/like.png')} />
                                <Text style={{ fontSize: 14, color: '#EA1D2F', fontFamily: 'Inter-Medium', marginHorizontal: 5 }}>Like</Text>
                            </TouchableOpacity>
                            <View style={{ height: 25, backgroundColor: '#EBEBEB', width: 1.5, alignSelf: 'center' }}></View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, flex: 1 }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../assets/chat.png')} />
                                <Text style={{ fontSize: 14, color: '#252525', fontFamily: 'Inter-Medium', marginHorizontal: 5 }}>Comment</Text>
                            </TouchableOpacity>
                            <View style={{ height: 25, backgroundColor: '#EBEBEB', width: 1.5, alignSelf: 'center' }}></View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, flex: 1 }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../assets/share.png')} />
                                <Text style={{ fontSize: 14, color: '#252525', fontFamily: 'Inter-Medium', marginHorizontal: 5 }}>Share</Text>
                            </TouchableOpacity>
                            <View>
                            </View>
                        </View>
                    </View>
                </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 20,
        marginVertical: 20,
        marginTop: 12,
        fontSize: 14,
        color: '#212121',
        fontFamily: 'Inter-SemiBold'
    },
    searchStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginLeft: 20,
        height: 45,
        borderColor: '#E6E6E6',
        borderWidth: 2,
        borderRadius: 8
    },
    textInput: {
        marginHorizontal: 5,
        flex: 1,
        padding: 5,
    }
})

export default AddPost;