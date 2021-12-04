import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'

export default function Label({ text,
    style,
    medium,
    bold,
    semiBold,
    poppins }) {
    return (
        <Text style={[
            styles.label,
            bold&&style.bold(poppins),
            medium&&style.medium(poppins),
            style
        ]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: scale(14),
        color: appColors.black,
        fontFamily: "Lato-light"
    },
    medium:(poppins)=>{
        return{
            fontFamily:poppins?"Poppins-Medium":"Lato-Regular"
        }
    },
    bold:(poppins)=>{
        return{
            fontFamily:poppins?"Poppins-Bold":"Lato-Bold"
        }
    },
    
})
