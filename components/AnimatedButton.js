import CircularProgress from 'react-native-circular-progress-indicator';
import { TouchableOpacity, View, SafeAreaView } from "react-native";
import React from 'react';

console.log('----->')
const Circular = () => {
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
        <CircularProgress
            value={60}
            radius={120}
            inActiveStrokeOpacity={0.5}
            activeStrokeWidth={20}
            inActiveStrokeWidth={20}
            progressValueStyle={{ fontWeight: '100', color: 'yellow' }}
        />
    </SafeAreaView>
}

export default Circular;