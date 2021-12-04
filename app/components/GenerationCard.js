import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Label from './Label';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from '../utils/appColors';

export default function GenerationCard({label}) {
  return (
    <Pressable>
      <LinearGradient
        locations={[0, 0.5]}
        colors={[appColors.primary, appColors.lightWhite]}
        style={styles.container}>
        <Label text={label ? label : "Label"} bold  style={{fontSize:scale(22)}} />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
      opacity:0.5,
    height: scale(100),
    width: scale(180),
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    flex: 1,
    paddingHorizontal: scale(10),
  },
});
