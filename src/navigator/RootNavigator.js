import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen , Products ,ProductDetail} from '../components/index';

const AuthStack = createStackNavigator();

const Route = () => (
    <AuthStack.Navigator headerMode="none">
        {/* <AuthStack.Screen name="Main" component={MainScreen} />
        <AuthStack.Screen name="Products" component={Products} /> */}
        <AuthStack.Screen name="ProductDetail" component={ProductDetail} />
    </AuthStack.Navigator>
);

export default Route;
