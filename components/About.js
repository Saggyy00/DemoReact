import { View, Text } from 'react-native'
import React from 'react'

const About = (props) => {
    return (
        <View>
            <View>
                <Text style={{ fontSize: 15, color: '#212121', fontFamily: 'Inter-SemiBold', marginHorizontal: 20, marginTop: 10 }}>Event Details</Text>
                <Text style={{ fontSize: 14, color: '#212121', fontFamily: 'Inter-Regular', marginHorizontal: 20, marginTop: 15, lineHeight: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis pulvinar nec pharetra risus varius vel. Commodo enim, viverra amet sed erat nibh purus, lorem imperdiet. Purus habitant justo, arcu malesuada risus in. Nulla mauris sem ut varius elementum dolor feugiat. Tempor ut ultricies metus, nunc. Velit, interdum risus fermentum, adipiscing arcu.</Text>
            </View>
        </View>
    )
}

export default About;