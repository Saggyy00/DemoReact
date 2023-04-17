import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, PermissionsAndroid, Platform, Linking, Alert } from 'react-native'
import React, {useState} from 'react'
import Video from 'react-native-video';
import { useIsFocused } from '@react-navigation/core';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

const requestSavePermission = async () => {
    if (Platform.OS !== 'android') return true;
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    if (permission == null) return false;
    let hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
       return true
    }
    const status = await PermissionsAndroid.request(permission);
    if (status === 'never_ask_again') {
        return Linking.openSettings()
    }
    return status === 'granted'
};

const ImagePrev = ({ route, navigation }) => {
    const { path } = route.params;
    const { type } = route.params;
    const isScreenFocused = useIsFocused();
    const isVideoPaused = !isScreenFocused;
    const [savingState, setSavingState] = useState('none');

    const handlePress = () => {
        route.params.callback()
        navigation.goBack();
    }
    const onSavePressed = () => {
        try {
            setSavingState('saving');
            const hasPermission = requestSavePermission();
            if (!hasPermission) {
                Alert.alert('Permission denied!', 'Vision Camera does not have permission to save the media to your camera roll.');
                return;
            }
            CameraRoll.save(`file://${path}`, {
                type: type,
            });
            setSavingState('saved');
        } catch (e) {
            const message = e instanceof Error ? e.message : JSON.stringify(e);
            setSavingState('none');
            Alert.alert('Failed to save!', `An unexpected error occured while trying to save your ${type}. ${message}`);
        }
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            {type === 'photo' && (
                <Image source={{ uri: `file://${path}` }} style={StyleSheet.absoluteFill} resizeMode="cover" />
            )}
            {type === 'video' && (
                <Video
                    source={{ uri: `file://${path}` }}
                    style={StyleSheet.absoluteFill}
                    paused={isVideoPaused}
                    resizeMode="cover"
                    posterResizeMode="cover"
                    allowsExternalPlayback={false}
                    automaticallyWaitsToMinimizeStalling={false}
                    disableFocus={true}
                    repeat={true}
                    useTextureView={false}
                    controls={false}
                    playWhenInactive={true}
                    ignoreSilentSwitch="ignore"
                />
            )}
            <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={handlePress}>
                <Image source={require('../assets/back_white.png')} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }} onPress={onSavePressed}>
                <Image source={require('../assets/download.png')} style={{ tintColor: 'white' }} />
            </TouchableOpacity>
        </View>
    )
}

export default ImagePrev;