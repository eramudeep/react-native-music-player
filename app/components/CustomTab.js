import React from 'react';
import {View, Text, useWindowDimensions,Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {appColors} from '../utils/appColors';
const SCREEN =Dimensions.get("screen")
export default function CustomTab({renderSceneMap}) {
  const layout = useWindowDimensions();
 
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
    {key: 'fourth', title: 'Fourth'},
  ]);

  const FirstRoute = () => <View style={{flex: 1}} />;

  const SecondRoute = () => <View style={{flex: 1}} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: SecondRoute,
    fourth: SecondRoute,
  });

  return (
    <TabView
      sceneContainerStyle={{height: scale(200), backgroundColor: 'transparent'}}
      navigationState={{index, routes}}
       
      renderTabBar={(props) => (
        <TabBar
         scrollEnabled={true}
          {...props}
          indicatorStyle={{
            backgroundColor: appColors.blue, 
            height:scale(4),
            borderRadius:scale(3),
             
          }}
          indicatorContainerStyle={{  }}
          style={{
              backgroundColor:"transparent",
               
              shadowOffset: {
                  width: 0,
                  height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,

              /* 'transparent' */}}
          tabStyle={{}}
        />
      )}
      renderScene={renderScene ? renderScene: renderSceneMap}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
