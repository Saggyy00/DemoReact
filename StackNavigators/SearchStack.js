import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomNav from '../components/CustomNav';
import LoginView from "../components/LoginView";
import SearchScreen from '../Tabs/SearchScreen';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
             <Stack.Screen name="Search Screen" component={SearchScreen} options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name="Login View" component={LoginView} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Custom Nav" component={CustomNav} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default SearchStack;