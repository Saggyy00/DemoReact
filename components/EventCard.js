import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const EventCard = () => {
    return (
        <SkeletonPlaceholder enabled={false}>
            <View>
                <View style={styles.cardStyle}>
                    <Image style={styles.cardImage} source={require('../assets/event.png')} />
                    <Text style={{ marginHorizontal: 15, marginTop: 12, fontSize: 14, color: '#212121', fontFamily: 'Inter-Regular', marginVertical: 2 }}>Date and Time</Text>
                    <Text style={{ marginHorizontal: 15, fontSize: 16, color: '#212121', fontFamily: 'Inter-SemiBold', marginVertical: 2 }}>Event Name</Text>
                    <Text style={{ marginHorizontal: 15, fontSize: 12, color: '#616161', fontFamily: 'Inter-Regular', marginVertical: 2 }}>Organized by</Text>
                    <Text style={{ marginHorizontal: 15, fontSize: 12, color: '#616161', fontFamily: 'Inter-Regular', marginVertical: 2 }}>Sahibzada Ajeet Singh Nagar (Mohali) · Railway Station - Balongi Rd, Industrial Area, Industrial Area Mohali Phase 9, Sahibzada Ajit Singh Nagar, Punjab</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={{ backgroundColor: '#B20312', flex: 1, borderRadius: 30, marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, color: '#FAFAFA', fontFamily: 'Inter-Medium' }}>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Image style={{ width: 40, height: 40 }} source={require('../assets/return.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Image style={{ width: 40, height: 40 }} source={require('../assets/bookmark.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SkeletonPlaceholder>

    )
}

const styles = StyleSheet.create({
    cardStyle: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#ddd',
        shadowColor: '#000000',
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 0.5
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    buttonsContainer: {
        marginVertical: 15,
        flexDirection: 'row',
    }
})
export default EventCard;