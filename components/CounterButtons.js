import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { decrementCount, incrementCount } from '../actions/actions';
import { useSelector } from 'react-redux'

const CounterButtons = () => {
     const [searchTerm, setSearchTerm] = useState('');
     const value = useSelector((store) => store.counter);

     useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          console.log(searchTerm)
          // Send Axios request here
        }, 1000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])

    const dispatch = useDispatch();

    const handleIncreament = () => {
        dispatch(incrementCount(1));
        setSearchTerm(parseInt(value+1));
    };
    const handleDecrement = () => {
        dispatch(decrementCount(1));
    };
    return (
        <View>
            <Text style={{ fontSize: 25, alignSelf: 'center', margin: 20 }}>  Increment/Decrement </Text>
            <Text> {searchTerm} </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center', borderRadius: 8, opacity: 0.5, margin: 5 }}
                 onPress={handleDecrement}
                 >
                    <Text style={{ fontSize: 25 }}> - </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center', borderRadius: 8, opacity: 0.5, margin: 5 }}
                    onPress={handleIncreament}
                  >
                    <Text style={{ fontSize: 25 }}> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CounterButtons