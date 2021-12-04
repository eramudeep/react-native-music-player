import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import { dummyImage } from '../../utils/MockData'
import PlayButton from '../CustomButton/PlayButton'
import Label from '../Label'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function MusicCard({label,onPlay}) {
    return (
        <View>
            <ImageBackground source={{uri:dummyImage}} style={styles.card}>
                <View style={styles.innerView}>
                        <Label text={`${label}`.toLocaleUpperCase()} style={{textAlign:"center"}} bold poppins size={scale(14)}/>
                <View style={styles.abslute}>
                <PlayButton onPress={onPlay}/>
                    </View>
                </View>
                
            </ImageBackground>
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
        borderRadius:scale(5),
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
