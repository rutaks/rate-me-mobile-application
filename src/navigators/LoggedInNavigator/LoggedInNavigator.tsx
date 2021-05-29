import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ReviewDetailsScreen, SendReviewScreen} from '../../screens';
import {routingConfig} from '../../config/routing-config';
import HomeNavigator from '../HomeNavigator';
import {getAccessToken} from '../../utils/token-storage.util';
import {useApi} from '../../context/Api';

const Stack = createStackNavigator();

const LoggedInNavigator = () => {
  const api: any = useApi();

  useEffect(() => {
    const setToken = async () => {
      const token = await getAccessToken();
      api.defaults.headers.Authorization = `Bearer ${token}`;
    };
    setToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
};

export default LoggedInNavigator;
