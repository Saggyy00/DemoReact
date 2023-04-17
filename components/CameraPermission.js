import { View, TouchableOpacity, Text, Linking } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';

const CameraPermission = ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = useState('not-determined');

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission)
  }, []);

  console.log(`Re-rendering Navigator. Camera: ${cameraPermission}`);

  const showPermissions = cameraPermission !== 'authorized';

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    if (permission === 'authorized') await navigation.navigate('CaptureCamera');
    setCameraPermission(permission);
  }, []);

  const requestMicrophonePermission = useCallback(async () => {
    console.log('Requesting microphone permission...');
    const permission = await Camera.requestMicrophonePermission();
    console.log(`Microphone permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    // setMicrophonePermission(permission);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity
        style={{ alignSelf: 'center', backgroundColor: 'gray', height: 50, width: 250, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}
        onPress={requestCameraPermission}
      >
        <Text style={{ color: 'white' }}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CameraPermission;