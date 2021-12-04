import React from 'react'
import { View, Text } from 'react-native'
import { scale } from 'react-native-size-matters'

export default function GenerationCard() {
    return (
        <View style={{backgroundColor:'red', height:scale(140), width:scale(180)}}>
            <Text>GenerationCard</Text>
        </View>
    )
}
