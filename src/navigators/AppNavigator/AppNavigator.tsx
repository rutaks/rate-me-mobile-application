import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {routingConfig} from '../../config/routing-config';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from '../AuthNavigator';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import LoggedInNavigator from '../LoggedInNavigator';
import {SplashScreen} from '../../screens';

const SharedElementStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={(_) => {
        // NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <SharedElementStack.Navigator headerMode="none">
        <SharedElementStack.Screen
          name={routingConfig.screens.Splash}
          component={SplashScreen}
        />
        <SharedElementStack.Screen
          name={routingConfig.navigators.Auth}
          component={AuthNavigator}
        />
        <SharedElementStack.Screen
          name={routingConfig.screens.ResetPassword}
          component={ResetPasswordScreen}
        />
        <SharedElementStack.Screen
          options={{
            gestureEnabled: false,
          }}
          name={routingConfig.navigators.LoggedIn}
          component={LoggedInNavigator}
        />
      </SharedElementStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
