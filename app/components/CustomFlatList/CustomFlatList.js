import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Label from '../Label'

export default function CustomFlatList({data,renderItems,isHorizontal,}) {
    return (
        <View>
            <Label text={"Recently played"}/>
        </View>
    )
}

const styles = StyleSheet.create({})
