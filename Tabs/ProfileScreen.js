import { SafeAreaView } from 'react-native'
import React from 'react'
import CounterButtons from '../components/CounterButtons';
import UpdateCounter from '../components/UpdateCounter';
import AnimatedButton from '../components/AnimatedButton';

const ProfileScreen = () => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <CounterButtons></CounterButtons>
            <UpdateCounter></UpdateCounter>
            <AnimatedButton></AnimatedButton>       
        </SafeAreaView>
    )
}

export default ProfileScreen;