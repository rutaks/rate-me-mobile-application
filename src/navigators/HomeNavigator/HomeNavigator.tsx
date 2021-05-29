import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routingConfig} from '../../config/routing-config';
import {Colors, Dimensions, Font} from '../../styles';
import {ActivityScreen, HomeScreen, ProfileScreen} from '../../screens';
import {Text, View} from 'react-native';
import {useCurrentView} from '../../context/CurrentView';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const {setCurrentView}: any = useCurrentView();

  return (
    <Tab.Navigator
      initialRouteName={routingConfig.screens.Home}
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return focused ? (
            <Text
              style={{
                ...Font.bold,
                fontSize: Dimensions.FONT_SIZE_SM,
                color: Colors.PRIMARY,
              }}>
              {route.name}
            </Text>
          ) : (
            <Text
              style={{
                ...Font.medium,
                fontSize: Dimensions.FONT_SIZE_SM,
                color: Colors.GRAY,
              }}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused, size}) => {
          let iconName: any;

          switch (route.name) {
            case routingConfig.screens.Home:
              iconName = focused ? 'binoculars' : 'binoculars';
              break;
            case routingConfig.screens.Profile:
              iconName = focused ? 'face-profile' : 'face-profile';
              break;
            case routingConfig.screens.Activity:
              iconName = focused ? 'content-save' : 'content-save';
              break;
            default:
              break;
          }
          if (route.name === routingConfig.screens.Home) {
            iconName = focused ? 'binoculars' : 'binoculars';
          }
          return (
            <View>
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={Colors.BLACK}
              />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.PRIMARY,
        inactiveTintColor: Colors.GRAY,
        style: {
          paddingTop: Dimensions.SIZE_SM,
          paddingBottom: Dimensions.SIZE_SM,
          height: Dimensions.SIZE_XL * 2.5,
          paddingLeft: Dimensions.SIZE_XL * 2,
          paddingRight: Dimensions.SIZE_XL * 2,
        },
      }}>
      <Tab.Screen
        listeners={{
          focus: () => {
            setCurrentView(routingConfig.screens.Activity);
          },
        }}
        name={routingConfig.screens.Activity}
        component={ActivityScreen}
      />
      <Tab.Screen
        listeners={{
          focus: () => {
            setCurrentView(routingConfig.screens.Home);
          },
        }}
        name={routingConfig.screens.Home}
        component={HomeScreen}
      />
      <Tab.Screen
        listeners={{
          focus: () => {
            setCurrentView(routingConfig.screens.Profile);
          },
        }}
        name={routingConfig.screens.Profile}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
