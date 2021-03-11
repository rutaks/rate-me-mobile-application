import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ReviewDetailsScreen, SendReviewScreen} from '../../screens';
import {routingConfig} from '../../config/routing-config';
import HomeNavigator from '../HomeNavigator';

const Stack = createStackNavigator();

const LoggedInNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name={routingConfig.navigators.Home}
      component={HomeNavigator}
    />
    <Stack.Screen
      name={routingConfig.screens.SendReview}
      component={SendReviewScreen}
    />
    <Stack.Screen
      name={routingConfig.screens.ReviewDetails}
      component={ReviewDetailsScreen}
    />
  </Stack.Navigator>
);

export default LoggedInNavigator;
