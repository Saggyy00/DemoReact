import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
             <Stack.Screen name="" component={SearchScreen} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default ProfileStack;