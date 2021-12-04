import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {appColors} from '../utils/appColors';

export default function CustomTab({renderSceneMap}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const FirstRoute = () => <View style={{flex: 1}} />;

  const SecondRoute = () => <View style={{flex: 1}} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      sceneContainerStyle={{height: scale(200), backgroundColor: 'transparent'}}
      navigationState={{index, routes}}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: appColors.sky, 
           // width: w, left: (100 - w) / 2 
          }}
          indicatorContainerStyle={{marginHorizontal: scale( 40), paddingHorizontal: scale( 80) }}
          
          style={{backgroundColor: appColors.primary /* 'transparent' */}}
          tabStyle={{}}
        />
      )}
      renderScene={renderScene ? renderScene: renderSceneMap}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
