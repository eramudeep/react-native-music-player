import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'

export default function Label({ text,
    style,
    medium,
    bold,
    semiBold,
    color,
    size,
    poppins }) {
    return (
        <Text style={[
            styles.label(poppins),
            bold&&styles.bold(poppins),
            medium&&style.medium(poppins),
            color&&{color:color},
            size&&{fontSize:size},
            style
        ]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label: (poppins)=>{
        return{
            fontSize: scale(14),
        color: appColors.white,
        fontFamily:poppins?"Poppins-Light": "Lato-light"
        }
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
