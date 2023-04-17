import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchSelected from '../assets/search_selected.svg';
import SearchUnselected from '../assets/search_unselected.svg';
import HomeSelected from '../assets/home_selected.svg';
import HomeUnselected from '../assets/home_unselected.svg';
import CartSelected from '../assets/cart_selected.svg';
import CartUnselected from '../assets/cart_unselected.svg';
import ProfileSelected from '../assets/profile_selected.svg';
import ProfileUnselected from '../assets/profile_unselected.svg';
import HomeStack from '../StackNavigators/HomeStack';
import SearchStack from '../StackNavigators/SearchStack';
import CartScreen from '../Tabs/CartScreen';
import ProfileScreen from '../Tabs/ProfileScreen';


const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: 'rgba(52, 52, 52, 0.2)',
                tabBarItemStyle: {
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                },
            })}>
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: ({ color }) => {
                    return (
                        color == "tomato" ? <HomeSelected width={20} height={20} /> : <HomeUnselected width={20} height={20} />
                    );
                },
                headerShown: false
            }} />
            <Tab.Screen name="Search" component={SearchStack} options={{
                tabBarIcon: ({ color }) => {
                    return (
                        color == "tomato" ? <SearchSelected width={20} height={20} /> : <SearchUnselected width={20} height={20} />
                    );
                },
                headerShown: false
            }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({ color }) => {
                    return (
                        color == "tomato" ? <CartSelected width={20} height={20} /> : <CartUnselected width={20} height={20} />
                    );
                },
                headerShown: false
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color }) => {
                    return (
                        color == "tomato" ? <ProfileSelected width={20} height={20} /> : <ProfileUnselected width={20} height={20} />
                    );
                },
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}

export default TabBar;
