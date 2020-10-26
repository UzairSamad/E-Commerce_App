import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import { MainScreen, Products, ProductDetail } from '../components/index';

const AuthStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Route = () => (
    // <AuthStack.Navigator headerMode="none">
    //     {/* <AuthStack.Screen name="Main" component={MainScreen} />
    //     <AuthStack.Screen name="Products" component={Products} /> */}
    //     <AuthStack.Screen name="ProductDetail" component={ProductDetail} />
    // </AuthStack.Navigator>
    <BottomTabs.Navigator>
        <BottomTabs.Screen name="Main" component={MainScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="sort" color={color} size={size} />
                ),
            }}
        />
        <BottomTabs.Screen name="Products" component={Products}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="grain" color={color} size={size} />
                ),
            }}
        />
        {/* <BottomTabs.Screen name="ProductDetail" component={ProductDetail}
        /> */}
    </BottomTabs.Navigator>
);

export default Route;
