import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CustomNav from "./components/CustomNav";
import LoginView from "./components/LoginView";
import LogInTemplate from "./components/LogInTemplate";
import UserInput from "./components/UserInput";
import List from "./components/List";
import AppNavigator from "./AppNavigator";
import SideDrawer from "./components/SideDrawer";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import messaging from '@react-native-firebase/messaging';

const store = configureStore();

const App = () => {
    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      
        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      }
    useEffect(() => {
        requestUserPermission()
    },[])
    return (
    //     <View style={styles.container}>
    //     {/* <CustomNav/> */}
    //     {/* <LoginView /> */}
    //     {/* <LogInTemplate/> */}
    //     {/* <UserInput/> */}
    //     {/* <List></List> */}
    //     {/* <SideDrawer></SideDrawer> */}
    //     <Provider store = {store}>
    //       <AppNavigator></AppNavigator>
    //     </Provider>
    // </View>
        <Provider store={store}>
            <AppNavigator/>
        </Provider>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App
