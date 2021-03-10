import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgotPasswordScreen, LoginScreen, SplashScreen} from '../../screens';
import {routingConfig} from '../../config/routing-config';
import CreateAccountScreen from '../../screens/CreateAccountScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name={routingConfig.screens.Splash}
      component={SplashScreen}
    />
    <Stack.Screen name={routingConfig.screens.Login} component={LoginScreen} />
    <Stack.Screen
      name={routingConfig.screens.ForgotPassword}
      component={ForgotPasswordScreen}
    />

    <Stack.Screen
      name={routingConfig.screens.Register}
      component={CreateAccountScreen}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
