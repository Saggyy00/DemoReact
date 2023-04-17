import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabBar from './TabBar';
import SideDrawer from './SideDrawer';

const Drawer = createDrawerNavigator();

const DrawerView = () => {
    return (
        <Drawer.Navigator drawerContent={props => <SideDrawer {...props}/>}>
            <Drawer.Screen
                name="TabBar"
                component={TabBar}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerView;