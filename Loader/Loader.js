import { View, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import LoadingDots from './LoadingDots'

const Loader = ({ visible = false }) => {
    return (
        (visible &&
            <View style={[styles.container, { height: useWindowDimensions().height, width: useWindowDimensions().width }]}>
                {/* <ActivityIndicator size={'large'} color={'#cc0000'}/> */}
                <View style={{ width: 60, alignSelf: 'center' }}>
                    <LoadingDots size={13} dots={3} colors={['black', 'black', 'black']}></LoadingDots>
                </View>

            </View>)
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'center'
    }
})
export default Loader;