import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogInTemplate from "../components/LogInTemplate";
import HomeScreen from '../Tabs/HomeScreen';
import CameraPermission from '../components/CameraPermission';
import CaptureCamera from '../Screens/CaptureCamera';
import ImagePrev from '../components/ImagePrev';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home Screen' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Login" component={LogInTemplate} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="CameraPermission" component={CameraPermission} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="CaptureCamera" component={CaptureCamera} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="ImagePrev" component={ImagePrev} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    )
}



export default HomeStack;