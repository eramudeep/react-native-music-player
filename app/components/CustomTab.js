import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {appColors} from '../utils/appColors';

export default function CustomTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}} />
  );

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      sceneContainerStyle={{height: scale(200), backgroundColor: 'transparent'}}
      navigationState={{index, routes}}
      renderTabBar={(props) => (
        <TabBar {...props} indicatorStyle={{backgroundColor:'#673ab7'}}  style={{backgroundColor:appColors.primary  /* 'transparent' */}} />
      )}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
