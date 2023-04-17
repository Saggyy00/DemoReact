import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from 'react-native-circular-progress-indicator';
import moment from 'moment';

const UpdateCounter = () => {

  const value = useSelector((store) => store.counter);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [captureCount, setCaptureCount] = useState(0);
  const [isPressedIn, setIsPressedIn] = useState(false);
  const [initialDate, setInitial] = useState(null);
  // let startTime = null;

  return (
    <View style={{ marginVertical: 200 }}>
      {/* <Text style={{ fontSize: 50, alignSelf: 'center' }}>  {value} </Text> */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress
          value={currentProgress}
          radius={80}
          onAnimationComplete={() => {
            setCurrentProgress(0);

            setCaptureCount(captureCount + 1);

            if (isPressedIn && captureCount < 6) {
              setTimeout(() => {
              //  console.log("CAPTURE COUNT>>>", captureCount);
                setCurrentProgress(100);
              }, 100);
            }
          }}
          activeStrokeColor={currentProgress === 0 ? 'grey' : 'green'}
          inActiveStrokeColor={'grey'}
          duration={currentProgress === 0 ? 0 : 2000} />

        <Pressable

          onPressOut={() => {

            let endTime = moment(new Date(), 'DD-MM-YYYY hh:mm:ss');
            console.log('End TIME >>', endTime);
            console.log('start', initialDate)
            var secondsDiff = endTime.diff(initialDate, 'seconds');
            console.log('Seconds:' + secondsDiff);

            setCaptureCount(0);
            setIsPressedIn(false);
            setCurrentProgress(0);
            console.log("CAPTURE COUNT COMPLETE", captureCount > 5 ? 5 : captureCount);
          }}
          onPressIn={() => {
            let startTime = moment(new Date(), 'DD-MM-YYYY hh:mm:ss');
            setInitial(startTime)
            console.log('START TIME >>', startTime);

            setIsPressedIn(true);
            setCurrentProgress(100);
          }} style={{ width: 120, height: 120, borderRadius: 100, backgroundColor: 'red', position: 'absolute' }}>

        </Pressable>
      </View>
    </View>
  )
}

export default UpdateCounter