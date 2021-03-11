import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routingConfig} from '../../config/routing-config';
import {Colors, Dimensions, Typography} from '../../styles';
import {ActivityScreen, HomeScreen, ProfileScreen} from '../../screens';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Tab.Navigator
    initialRouteName={routingConfig.screens.Home}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName: any;

        switch (route.name) {
          case routingConfig.screens.Home:
            iconName = focused ? 'binoculars' : 'binoculars';
            break;
          case routingConfig.screens.Profile:
            iconName = focused ? 'face-profile' : 'face-profile';
            break;
          case routingConfig.screens.Activity:
            iconName = focused ? 'state-machine' : 'state-machine';
            break;
          default:
            break;
        }
        if (route.name === routingConfig.screens.Home) {
          iconName = focused ? 'binoculars' : 'binoculars';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.PRIMARY,
      inactiveTintColor: Colors.GRAY,
      labelStyle: {...Typography.label},
      style: {
        marginTop: Dimensions.SIZE_SM,
        paddingBottom: Dimensions.SIZE_SM,
        height: Dimensions.SIZE_XL * 2.5,
        paddingLeft: Dimensions.SIZE_XL * 2,
        paddingRight: Dimensions.SIZE_XL * 2,
      },
    }}>
    <Tab.Screen
      name={routingConfig.screens.Activity}
      component={ActivityScreen}
    />
    <Tab.Screen name={routingConfig.screens.Home} component={HomeScreen} />
    <Tab.Screen
      name={routingConfig.screens.Profile}
      component={ProfileScreen}
    />
  </Tab.Navigator>
);

export default HomeNavigator;
