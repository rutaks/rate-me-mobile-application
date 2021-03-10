import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {linking, routingConfig} from '../../config/routing-config';
import {createStackNavigator} from '@react-navigation/stack';
// import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import AuthNavigator from '../AuthNavigator';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
// import HomeNavigator from '../HomeNavigator';
// import NavigationService from '../../service/navigation-service';

const SharedElementStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        // NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      linking={linking}>
      <SharedElementStack.Navigator headerMode="none">
        <SharedElementStack.Screen
          name={routingConfig.navigators.Auth}
          component={AuthNavigator}
        />
        <SharedElementStack.Screen
          name={routingConfig.screens.ResetPassword}
          component={ResetPasswordScreen}
        />
        {/* <SharedElementStack.Screen
          options={{
            gestureEnabled: false,
          }}
          name={routingConfig.navigators.Home}
          component={HomeNavigator}
        /> */}
      </SharedElementStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
