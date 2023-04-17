import React,{useEffect} from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNav from "./components/CustomNav";
import LoginView from "./components/LoginView";
import LogInTemplate from "./components/LogInTemplate";
import DrawerView from './components/DrawerView';
import TabBar from './components/TabBar';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
         <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DrawerView" component={DrawerView} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
