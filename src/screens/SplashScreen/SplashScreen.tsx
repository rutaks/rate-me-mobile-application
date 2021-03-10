import {NavigationProp, StackActions} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {routingConfig} from '../../config/routing-config';
import {styles} from './SplashScreen.styles';

/**
 * Function component representing splash screen
 * @param props
 * @author Awesomity Lab
 * @version 1.0
 */
const SplashScreen = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const navigateToLogin = useCallback(() => {
    navigation.dispatch(StackActions.replace(routingConfig.screens.Login));
  }, [navigation]);

  useEffect(() => {
    navigateToLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <SharedElement id="SplashLogin">
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.author}>Developed by Yves Honore BISEMAGE</Text>
      </SharedElement>
    </View>
  );
};

export default SplashScreen;
