import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Route from './RootNavigator';
// import Drawer from './Drawer';

const RootStack = createStackNavigator();



const Navigation = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="RouteStack" component={Route} />
    {/* <RootStack.Screen name="DrawerStack" component={Drawer} /> */}
  </RootStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);
