import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import React, { useRef, useCallback, useEffect, useState } from 'react'
import { Camera, useCameraDevices, CameraPermissionStatus, TakePhotoOptions, TakeSnapshotOptions, CameraRuntimeError } from 'react-native-vision-camera';
import Reanimated from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useIsFocused } from '@react-navigation/core';

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
    zoom: true,
});


const CaptureCamera = ({ navigation }) => {
    const refCamera = useRef();
    const devices = useCameraDevices()
    const [isCameraInitialized, setIsCameraInitialized] = useState(false);
    const [cameraPosition, setCameraPosition] = useState('back')
    const [flash, setFlash] = useState('off')
    const [showCamera, setShowCamera] = useState(false);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [isRecording, setRecording] = useState(false);
    const isFocussed = useIsFocused();
    const device = devices[cameraPosition];
    const supportsFlash = device?.hasFlash ?? false;
    const isActive = isFocussed;
    const [cameraPermission, setCameraPermission] = useState(CameraPermissionStatus)

    const takePhotoOptions = {
        photoCodec: 'jpeg',
        qualityPrioritization: 'speed',
        flash: supportsFlash ? flash : 'off',
        quality: 70,
        skipMetadata: true,
    }

    const takePhoto = useCallback(async () => {
        try {
            if (refCamera.current == null) throw new Error('Camera Ref is Null');

            console.log('Photo taking ....');
            const photo = await refCamera.current.takePhoto(takePhotoOptions);
            console.log(photo.path);
            if (photo.path !== null) await navigation.navigate('ImagePrev', {
                path: photo.path,
                shown: showCamera,
                type: 'photo',
                callback: refresh
            });
        } catch (error) {
            console.log('Failed to take photo!', error);
        }
    }, [takePhotoOptions]);

    const startRecording = () => {
        try {
            if (refCamera.current == null) throw new Error('Camera ref is null!');

            console.log('calling startRecording()...');
            setRecording(true)
            refCamera.current.startRecording({
                flash: flash,
                onRecordingError: (error) => {
                    console.error('Recording failed!', error);
                    setRecording(false);
                },
                onRecordingFinished: (video) => {
                    console.log(`Recording successfully finished! ${video.path}`);
                    if (video.path !== null) navigation.navigate('ImagePrev', {
                        path: video.path,
                        shown: showCamera,
                        type: 'video',
                        callback: refresh
                    });
                    setRecording(false);
                },
            });
            console.log('called startRecording()!');
        } catch (e) {
            console.error('failed to start recording!', e, 'camera');
        }
    }

    const stopRecording = () => {
        if (isRecording) {
            try {
                if (refCamera.current == null) throw new Error('Camera ref is null!');
                console.log('calling stopRecording()...');
                refCamera.current.stopRecording();
                console.log('called stopRecording()!');
                setRecording(false)
            } catch (e) {
                console.error('failed to stop recording!', e);
            }
        }
    }

    const refresh = () => {
        setShowCamera(false);
    };

    useEffect(() => {
        Camera.getCameraPermissionStatus().then(setCameraPermission);
        setTimeout(() => {
            setShowCamera(true);
        }, 500);
    }, [showCamera]);

    const onInitialized = () => {
        console.log('Camera initialized!');
        setIsCameraInitialized(true);
    };

    const onDoubleTap = () => {
        setCameraPosition((p) => (p === 'back' ? 'front' : 'back'));
    };

    const onFlashPressed = () => {
        setFlash((f) => (f === 'off' ? 'on' : 'off'));
    };

    if (device == null) {
        return <ActivityIndicator size={20} color={'red'} />
    }

    return (
        showCamera ? <View style={{ flex: 1, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'center' }}>
            {cameraPermission !== 'authorized' ? (<Text> Loading </Text>) : (device !== null && (
                <Reanimated.View style={StyleSheet.absoluteFill}>
                    <TapGestureHandler onEnded={onDoubleTap} numberOfTaps={2}>
                        <ReanimatedCamera
                            ref={refCamera}
                            style={StyleSheet.absoluteFill}
                            device={device}
                            isActive={isActive}
                            photo={true}
                            video={true}
                            audio={true}
                            onInitialized={onInitialized}
                        />
                    </TapGestureHandler>
                </Reanimated.View>
            ))}
            <View style={{ flex: 1, alignSelf: 'flex-end' }}></View>
            <View style={{ alignSelf: 'flex-end', bottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress
                    value={currentProgress}
                    radius={50}
                    progressValueColor={'transparent'}
                    onAnimationComplete={() => {
                        stopRecording();
                        setCurrentProgress(0);
                    }}
                    activeStrokeColor={currentProgress === 0 ? 'grey' : 'pink'}
                    inActiveStrokeColor={'grey'}
                    duration={currentProgress === 0 ? 0 : 5000} />
                <TouchableOpacity
                    style={{ height: 70, width: 70, backgroundColor: 'white', borderRadius: 75 / 2, opacity: 0.5, position: 'absolute' }}
                    onLongPress={() => {
                        startRecording();
                        setCurrentProgress(100);
                    }}
                    onPressOut={() => {
                        stopRecording();
                        setCurrentProgress(0);
                    }}
                    onPress={takePhoto}
                >
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={{ alignSelf: "flex-end", flex: 1, height: 75, alignItems: 'center' }}
                onPress={onFlashPressed}
            >
                <Text style={{ fontSize: 25 }}> Flash {flash}</Text>
            </TouchableOpacity>
        </View> : <View />
    )
}

export default CaptureCamera;