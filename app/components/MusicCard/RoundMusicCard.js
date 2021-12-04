import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import { dummyImage } from '../../utils/MockData'
import PlayButton from '../CustomButton/PlayButton'
import Label from '../Label'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function RoundMusicCard({label,onPlay}) {
    return (
        <View style={{alignItems:"center"}}>
            <Image source={{uri:dummyImage}} style={styles.card}/>
            <Label text={"Deep Focus"} poppins/>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Ionicons name={"heart"} color={appColors.lightWhite} size={scale(15)}/>
                    <Label text={"678,165"}  color={appColors.lightWhite} size={scale(11)} style={{marginLeft:scale(5)}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        height:scale(120),
        width:scale(120),
        borderRadius:scale(120/2),
        overflow:"hidden",
        marginRight:scale(10),
        marginVertical:scale(5),
        // padding:scale(10)
    },
    innerView:{
        backgroundColor:appColors.whiteBackdrop ,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    abslute:{
        position:"absolute",
        bottom:scale(5),
        left:scale(7)
    }
})
