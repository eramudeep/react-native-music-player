import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView,  } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import {  } from 'react-native-gesture-handler';
import { features, starterIntro } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors } from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'; 
import Divider from '../../components/Divider';
import Modal from 'Components/Modal';
import { scale } from 'react-native-size-matters';

import Container from '../../components/Container';
import CustomFlatList from '../../components/CustomFlatList/CustomFlatList';
import CustomTab from '../../components/CustomTab';
import MusicCard from '../../components/MusicCard/MusicCard';
import RoundMusicCard from '../../components/MusicCard/RoundMusicCard';
export default function Home() {

  const _renderItems=()=>{
    return(
      <View style={{marginTop:scale(5)}}>
        <MusicCard/>
      </View>
    )
  }
    return (
        <Container>
             {/* <CustomTab /> */}
          <CustomFlatList
          title={"Make satruday more productive"}
          isHorizontal
          ListHeaderComponent={()=>{return<RoundMusicCard/>}}
          data={[1,2,3,4]}
          renderItems={_renderItems}/>
       

        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: appColors.primary,
      alignItems: 'center',
      borderBottomWidth: 12,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 25,
      padding: 20,
      margin: 20,
      textAlign:'center'
    },
    TitleText: {
        fontSize: 25,
        // padding: 20,
        marginVertical: 20,
      },
    scrollContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    
  });