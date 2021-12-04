import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { appColors } from '../../utils/appColors'
export default function PlayButton({onPress}) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <MaterialIcons name={"play-arrow"} size={scale(20)} color={appColors.white}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(30),
        width:scale(30),
        borderRadius:scale(15),
        backgroundColor:"rgba(0,0,0,0.4)",
        justifyContent:"center",
        alignItems:"center"
    }
})
