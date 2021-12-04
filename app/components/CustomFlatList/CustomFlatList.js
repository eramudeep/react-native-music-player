import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import Label from '../Label'

export default function CustomFlatList({ data, renderItems, isHorizontal, title, subTitle }) {
    return (
        <View>
            {title&&<Label text={title}
                poppins
                size={scale(16)}
                bold />}
            {subTitle&&<Label
                text={subTitle}
                poppins
                size={scale(12)}
                color={appColors.lightWhite}
            />}
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItems}
                horizontal={isHorizontal}
                keyExtractor={(item, index) => "key" + index}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
