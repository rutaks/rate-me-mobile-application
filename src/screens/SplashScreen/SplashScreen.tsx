import {NavigationProp, StackActions} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {routingConfig} from '../../config/routing-config';
import {useApi} from '../../context/Api';
import {useIsUserLoggedIn} from '../../hooks/useIsUserLoggedIn';
import {getAccessToken} from '../../utils/token-storage.util';
import {styles} from './SplashScreen.styles';

/**
 * Function component representing splash screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const SplashScreen = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const api: any = useApi(); // api context value
  const navigateToHome = useCallback(() => {
    getAccessToken().then((accessToken) => {
      api.defaults.headers.common.Authorization = accessToken;
      navigation.dispatch(
        StackActions.replace(routingConfig.navigators.LoggedIn),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const navigateToLogin = useCallback(() => {
    navigation.dispatch(StackActions.replace(routingConfig.navigators.Auth));
  }, [navigation]);

  useIsUserLoggedIn(navigateToHome, navigateToLogin);

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
