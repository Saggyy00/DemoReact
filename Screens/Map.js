import { AppState, View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
    Geolocation.getCurrentPosition(info => {
        setRegion(prevState => ({ ...prevState, latitude: info.coords.latitude, longitude: info.coords.longitude }));
    });
    const [coordinates] = useState([
        {
            latitude: 30.7115895,
            longitude: 76.6891892,
        },
        {
            latitude: 30.7333,
            longitude: 76.7794,
        },
    ]);
    const origin = { latitude: 30.7115895, longitude: 76.6891892 };
    const destination = { latitude: 30.7333, longitude: 76.7794 };

    const [region, setRegion] = useState({
        latitude: 30.7115895,
        longitude: 76.6891892,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    });
    const [state, setState] = useState(AppState.currentState);

    useEffect(() => {
        const appStateListener = AppState.addEventListener('change',
            nextAppState => {
                console.log('Next AppState is: ', nextAppState);
                setState(nextAppState);
            },
        );
        return () => {
            appStateListener?.remove();
        };
    }, [])

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}// remove if not using Google Maps
                style={styles.map}
                initialRegion={{
                    latitude: 30.7115895,
                    longitude: 76.6891892,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                // onRegionChange={(region) => setRegion(region)}
                showsUserLocation={true}
            >
                <Marker coordinate={region} title={state} />
                {/* <Polyline
                   coordinates={coordinates}
                   strokeColor="#000"
                   strokeWidth={6}
                /> */}
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={"AIzaSyBgPRk1qq4ldliPNmDXpE4WfpC_1gCqwbE"}
                    strokeWidth={5}
                    strokeColor="#FF0000"
                />
            </MapView>
            <Text style={{ fontSize: 20, alignSelf: 'center' }}>Current latitude: {region.latitude}</Text>
            <Text style={{ fontSize: 20, alignSelf: 'center' }}>Current longitude: {region.longitude}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1
    },
});

export default Map;