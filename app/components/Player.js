import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import Container from './Container';
import Label from './Label';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {appColors} from '../utils/appColors';
const SCREEEN = Dimensions.get('window');

export default function Player() {
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.itemWrap}>
        <Image
          style={{
            borderRadius: scale(15),
            height: scale(300),
            width: SCREEEN.width - 70,
          }}
          source={{uri: 'https://i.ytimg.com/vi/H-dz24i33OY/maxresdefault.jpg'}}
        />

        <View style={{paddingVertical: scale(20)}}>{_activeSong()}</View>
      </View>
    );
  };

  const _activeSong = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Label text="Alvida" style={{fontSize: scale(22)}} />
        <Label text="Raj Ranjodh" style={{color: appColors.lightWhite}} />
      </View>
    );
  };
  const _renderAction = () => {
    return (
      <View style={styles.actionCon}>
        <MaterialIcons name="add" size={scale(25)} color={appColors.white} />
        <MaterialIcons name="image" size={scale(25)} color={appColors.white} />
        <MaterialIcons
          name="more-vert"
          size={scale(25)}
          color={appColors.white}
        />
      </View>
    );
  };
  const _renderTrack = () => {
    return (
      <>
        <View style={styles.seekCon}>
          <View style={styles.seekInnerCon} />
        </View>
        <View style={styles.durationCOn}>
          <Label text="0:20" />
          <Label text="3:38" />
        </View>
      </>
    );
  };
  const _renderBelowActions = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MaterialIcons name="report" size={scale(35)} color={appColors.white} />
        <MaterialIcons
          name="skip-previous"
          size={scale(35)}
          color={appColors.white}
        />
        <MaterialIcons name="pause" size={scale(35)} color={appColors.white} />
        <MaterialIcons
          name="skip-next"
          size={scale(35)}
          color={appColors.white}
        />
        <MaterialIcons
          name="favorite-border"
          size={scale(35)}
          color={appColors.white}
        />
      </View>
    );
  };
  return (
    <Container>
      <View style={{height: scale(400)}}>
        <Carousel
          layout={'default'}
          data={[1, 2, 3]}
          renderItem={_renderItem}
          sliderWidth={SCREEEN.width}
          itemWidth={SCREEEN.width}
            
        />
      </View>
      <View style={{paddingHorizontal: scale(20)}}>
        {_renderAction()}
        {_renderTrack()}
        {_renderBelowActions()}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  actionCon: {
    padding: scale(10),
    paddingHorizontal: 20,

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(20),
    borderRadius: scale(10),
    overflow: 'hidden',
  },
  seekCon: {
    backgroundColor: appColors.lightWhite,
    height: scale(4),
    borderRadius: scale(5),
  },
  seekInnerCon: {
    backgroundColor: appColors.sky,
    height: scale(4),
    width: '50%',
    borderRadius: scale(5),
  },
  durationCOn: {
    paddingVertical: scale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
