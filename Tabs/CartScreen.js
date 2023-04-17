import { View, Text } from 'react-native'
import React from 'react'
import List from '../components/List';
import Draggable from '../Screens/Draggable';
import MusicPlayer from '../Screens/MusicPlayer';

const CartScreen = () => {
  return (
    <View>
      {/* <List></List> */}
      {/* <Draggable></Draggable> */}
      <MusicPlayer></MusicPlayer>
    </View> 
  )
}

export default CartScreen;