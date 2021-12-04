import React from 'react'
import { ScrollView, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'

export default function Container({children,isScrollable}) {
    return (
        <LinearGradient
        locations={[0,0.5]}
         colors={[appColors.primary,appColors.lightBlack]}  style={styles.container}>
            {
                isScrollable? <ScrollView>
                    <SafeAreaView style={styles.innerView}>
                        {children}
                    </SafeAreaView>
                </ScrollView>
                :
                <SafeAreaView style={styles.innerView}>{children}</SafeAreaView>
            }
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    innerView:{
        flex:1,
        paddingHorizontal:scale(20)
    }
})
